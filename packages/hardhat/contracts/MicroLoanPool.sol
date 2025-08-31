// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MicroLoanPool {
    struct Student {
        string name;
        string university;
        uint256 academicScore;
        uint256 totalBorrowed;
        uint256 totalRepaid;
        bool isActive;
        uint256 creditScore;
    }
    
    struct Loan {
        uint256 amount;
        uint256 interestRate;
        uint256 dueDate;
        bool isRepaid;
        uint256 repaidAmount;
    }
    
    mapping(address => Student) public students;
    mapping(address => Loan[]) public studentLoans;
    mapping(address => uint256) public deposits; // Para inversores
    
    address[] public studentAddresses;
    address[] public investors;
    
    uint256 public totalPoolBalance;
    uint256 public totalLoansIssued;
    
    event StudentRegistered(address indexed student, string name, uint256 academicScore);
    event LoanIssued(address indexed student, uint256 amount, uint256 interestRate);
    event LoanRepaid(address indexed student, uint256 amount);
    event DepositMade(address indexed investor, uint256 amount);
    
    // Registro de estudiantes
    function registerStudent(
        string memory _name,
        string memory _university,
        uint256 _academicScore
    ) external {
        require(_academicScore >= 0 && _academicScore <= 100, "Invalid academic score");
        require(!students[msg.sender].isActive, "Student already registered");
        
        students[msg.sender] = Student({
            name: _name,
            university: _university,
            academicScore: _academicScore,
            totalBorrowed: 0,
            totalRepaid: 0,
            isActive: true,
            creditScore: calculateInitialCreditScore(_academicScore)
        });
        
        studentAddresses.push(msg.sender);
        emit StudentRegistered(msg.sender, _name, _academicScore);
    }
    
    // Calcular score crediticio inicial basado en rendimiento académico
    function calculateInitialCreditScore(uint256 _academicScore) internal pure returns (uint256) {
        if (_academicScore >= 90) return 850;
        if (_academicScore >= 80) return 750;
        if (_academicScore >= 70) return 650;
        if (_academicScore >= 60) return 550;
        return 450;
    }
    
    // Inversores depositan fondos
    function deposit() external payable {
        require(msg.value > 0, "Deposit must be greater than 0");
        
        if (deposits[msg.sender] == 0) {
            investors.push(msg.sender);
        }
        
        deposits[msg.sender] += msg.value;
        totalPoolBalance += msg.value;
        
        emit DepositMade(msg.sender, msg.value);
    }
    
    // Estudiantes solicitan préstamos
    function requestLoan(uint256 _amount) external {
        require(students[msg.sender].isActive, "Student not registered");
        require(_amount > 0, "Loan amount must be greater than 0");
        require(_amount <= getMaxLoanAmount(msg.sender), "Requested amount exceeds credit limit");
        require(totalPoolBalance >= _amount, "Insufficient pool balance");
        
        uint256 interestRate = calculateInterestRate(msg.sender);
        uint256 dueDate = block.timestamp + 180 days; // 6 meses para pagar
        
        studentLoans[msg.sender].push(Loan({
            amount: _amount,
            interestRate: interestRate,
            dueDate: dueDate,
            isRepaid: false,
            repaidAmount: 0
        }));
        
        students[msg.sender].totalBorrowed += _amount;
        totalPoolBalance -= _amount;
        totalLoansIssued += _amount;
        
        // Transferir fondos al estudiante
        payable(msg.sender).transfer(_amount);
        
        emit LoanIssued(msg.sender, _amount, interestRate);
    }
    
    // Calcular monto máximo de préstamo basado en credit score
    function getMaxLoanAmount(address _student) public view returns (uint256) {
        uint256 creditScore = students[_student].creditScore;
        
        if (creditScore >= 800) return 1 ether;
        if (creditScore >= 700) return 0.5 ether;
        if (creditScore >= 600) return 0.3 ether;
        return 0.1 ether;
    }
    
    // Calcular tasa de interés basada en credit score
    function calculateInterestRate(address _student) internal view returns (uint256) {
        uint256 creditScore = students[_student].creditScore;
        
        if (creditScore >= 800) return 5;  // 5% anual
        if (creditScore >= 700) return 8;  // 8% anual
        if (creditScore >= 600) return 12; // 12% anual
        return 15; // 15% anual
    }
    
    // Repagar préstamo
    function repayLoan(uint256 _loanIndex) external payable {
        require(_loanIndex < studentLoans[msg.sender].length, "Invalid loan index");
        
        Loan storage loan = studentLoans[msg.sender][_loanIndex];
        require(!loan.isRepaid, "Loan already repaid");
        require(msg.value > 0, "Payment must be greater than 0");
        
        loan.repaidAmount += msg.value;
        students[msg.sender].totalRepaid += msg.value;
        totalPoolBalance += msg.value;
        
        // Calcular total adeudado (capital + interés)
        uint256 totalOwed = loan.amount + (loan.amount * loan.interestRate / 100);
        
        if (loan.repaidAmount >= totalOwed) {
            loan.isRepaid = true;
            // Mejorar credit score por pago completo
            if (block.timestamp <= loan.dueDate) {
                students[msg.sender].creditScore += 10; // Bonus por pago a tiempo
            }
        }
        
        emit LoanRepaid(msg.sender, msg.value);
    }
    
    // Obtener información del estudiante
    function getStudentInfo(address _student) external view returns (
        string memory name,
        string memory university,
        uint256 academicScore,
        uint256 totalBorrowed,
        uint256 totalRepaid,
        uint256 creditScore,
        bool isActive
    ) {
        Student memory student = students[_student];
        return (
            student.name,
            student.university,
            student.academicScore,
            student.totalBorrowed,
            student.totalRepaid,
            student.creditScore,
            student.isActive
        );
    }
    
    // Obtener préstamos del estudiante
    function getStudentLoans(address _student) external view returns (
        uint256[] memory amounts,
        uint256[] memory interestRates,
        uint256[] memory dueDates,
        bool[] memory repaidStatus
    ) {
        Loan[] memory loans = studentLoans[_student];
        uint256 length = loans.length;
        
        amounts = new uint256[](length);
        interestRates = new uint256[](length);
        dueDates = new uint256[](length);
        repaidStatus = new bool[](length);
        
        for (uint256 i = 0; i < length; i++) {
            amounts[i] = loans[i].amount;
            interestRates[i] = loans[i].interestRate;
            dueDates[i] = loans[i].dueDate;
            repaidStatus[i] = loans[i].isRepaid;
        }
    }
    
    // Estadísticas del pool
    function getPoolStats() external view returns (
        uint256 totalBalance,
        uint256 totalIssued,
        uint256 totalStudents,
        uint256 totalInvestors
    ) {
        return (
            totalPoolBalance,
            totalLoansIssued,
            studentAddresses.length,
            investors.length
        );
    }
}
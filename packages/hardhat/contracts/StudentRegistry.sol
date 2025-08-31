// StudentRegistry.sol -  simple para testeo de app
pragma solidity ^0.8.19;

contract StudentRegistry {
    struct Student {
        string name;
        string university;
        uint256 academicScore;
        bool isRegistered;
    }
    
    mapping(address => Student) public students;
    address[] public studentAddresses;
    
    event StudentRegistered(address student, string name);
    
    function registerStudent(
        string memory _name, 
        string memory _university,
        uint256 _academicScore
    ) external {
        students[msg.sender] = Student({
            name: _name,
            university: _university,
            academicScore: _academicScore,
            isRegistered: true
        });
        
        studentAddresses.push(msg.sender);
        emit StudentRegistered(msg.sender, _name);
    }
    
    function getStudentCount() external view returns (uint256) {
        return studentAddresses.length;
    }
}
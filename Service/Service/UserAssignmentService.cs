using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class UsersAssignmentService: IUsersAssignmentRepository, IUsersAssignmentService
    {
        public readonly IUsersAssignmentRepository repository;

        public UsersAssignmentService(IUsersAssignmentRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<UsersAssignment> GetAll()
        {
            return repository.GetAll();
        }



    }
}

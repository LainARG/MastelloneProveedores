using System.Collections.Generic;
using Repository.Interfaces;
using Domain;
using Service.Interfaces;

namespace Service
{
    public class UsersService : IUsersRepository, IUsersService
    {
        public readonly IUsersRepository repository;

        public UsersService(IUsersRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<Users> GetAll()
        {
            return repository.GetAll();
        }

        public void SetTimeLog(object userId){
            repository.SetTimeLog(userId);
        }

        public IEnumerable<Documents> GetNewness(object userId)
        {
            return repository.GetNewness(userId);
        }

        public IEnumerable<Users> GetAllWithDetails()
        {
            return repository.GetAllWithDetails();
        }




    }
}

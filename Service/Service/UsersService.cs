using System.Collections.Generic;
using Repository.Interfaces;
using Domain;
using Service.Interfaces;

namespace Service
{
    public class UsersService: IUsersRepository, IUsersService
    {
        public readonly IUsersRepository usersRepository;

        public UsersService(IUsersRepository repository)
        {
            this.usersRepository = repository;
        }


        public IEnumerable<Users> GetAll()
        {
            return usersRepository.GetAll();
        }






    }
}

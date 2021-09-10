using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IUsersRepository
    {

        public IEnumerable<Users> GetAll();
        public IEnumerable<Users> GetAllWithDetails();
        public void SetTimeLog(object userId);
        public IEnumerable<Documents> GetNewness(object userId);

    }
}
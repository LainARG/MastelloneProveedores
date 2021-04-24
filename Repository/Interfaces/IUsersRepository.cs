using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IUsersRepository
    {

        public IEnumerable<Users> GetAll();

    }
}
using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IUsersService
    {

        public IEnumerable<Users> GetAll();
        public IEnumerable<Users> GetAllWithDetails();
        public void SetTimeLog(object userId);
        public IEnumerable<Documents> GetNewness(object userId);

        

    }
}

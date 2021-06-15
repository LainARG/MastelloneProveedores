using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IUsersAssignmentRepository
    {

        public IEnumerable<UsersAssignment> GetAll();


    }
}
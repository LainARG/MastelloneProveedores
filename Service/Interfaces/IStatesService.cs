using System;
using System.Collections.Generic;
using System.Text;
using Domain;

namespace Service.Interfaces
{
    public interface IStatesService
    {

        public IEnumerable<States> GetAll();

    }
}

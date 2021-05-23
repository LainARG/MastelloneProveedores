using Domain;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;

namespace Repository.Repository
{
    public class StateTypesRepository : BaseRepository, IStateTypesRepository
    {
        public StateTypesRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<StateTypes> GetAll()
        {

            return _dbContext.Tipos_estado;
        
        }

    }

}
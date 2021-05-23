using System.Collections.Generic;
using Repository.Interfaces;
using Domain;
using Service.Interfaces;

namespace Service
{
    public class StateTypesService: IStateTypesRepository, IStateTypesService
    {
        public readonly IStateTypesRepository repository;

        public StateTypesService(IStateTypesRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<StateTypes> GetAll()
        {
            return repository.GetAll();
        }






    }
}

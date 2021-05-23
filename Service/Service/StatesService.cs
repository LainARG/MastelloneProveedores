using System.Collections.Generic;
using Repository.Interfaces;
using Domain;
using Service.Interfaces;

namespace Service
{
    public class StatesService: IStatesRepository, IStatesService
    {
        public readonly IStatesRepository repository;

        public StatesService(IStatesRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<States> GetAll()
        {
            return repository.GetAll();
        }






    }
}

using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class VisitsService: IVisitsRepository, IVisitsService
    {
        public readonly IVisitsRepository repository;

        public VisitsService(IVisitsRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<Visits> GetAll()
        {
            return repository.GetAll();
        }

        
    }
}

using System.Collections.Generic;
using Repository.Interfaces;
using Domain;
using Service.Interfaces;

namespace Service
{
    public class TaxesService: ITaxesRepository, ITaxesService
    {
        public readonly ITaxesRepository taxesRepository;

        public TaxesService(ITaxesRepository repository)
        {
            this.taxesRepository = repository;
        }


        public IEnumerable<Taxes> GetAll()
        {
            return taxesRepository.GetAll();
        }






    }
}

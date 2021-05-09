using System.Collections.Generic;
using Repository.Interfaces;
using Domain;
using Service.Interfaces;

namespace Service
{
    public class BillsService: IBillsRepository, IBillsService
    {
        public readonly IBillsRepository billsRepository;

        public BillsService(IBillsRepository repository)
        {
            this.billsRepository = repository;
        }


        public IEnumerable<Bills> GetAll()
        {
            return billsRepository.GetAll();
        }






    }
}

using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class ProvidersService: IProvidersRepository, IProvidersService
    {
        public readonly IProvidersRepository repository;

        public ProvidersService(IProvidersRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<Providers> GetAll()
        {
            return repository.GetAll();
        }

        
    }
}

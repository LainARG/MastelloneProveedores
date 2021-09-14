using System.Collections.Generic;
using Service.Interfaces;
using Repository.Interfaces;
using Domain;


namespace Service
{
    public class NoticesService: INoticesRepository, INoticesService
    {
        public readonly INoticesRepository repository;

        public NoticesService(INoticesRepository repository)
        {
            this.repository = repository;
        }

        public IEnumerable<Notices> GetAll()
        {
            return repository.GetAll();
        }

    }
}

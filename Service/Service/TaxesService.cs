﻿using System.Collections.Generic;
using Repository.Interfaces;
using Domain;
using Service.Interfaces;

namespace Service
{
    public class TaxesService: ITaxesRepository, ITaxesService
    {
        public readonly ITaxesRepository repository;

        public TaxesService(ITaxesRepository repository)
        {
            this.repository = repository;
        }


        public IEnumerable<Taxes> GetAll()
        {
            return repository.GetAll();
        }






    }
}

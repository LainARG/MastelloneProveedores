﻿using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IProvidersRepository
    {

        public IEnumerable<Providers> GetAll();

    }
}
﻿using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IVisitsRepository
    {

        public IEnumerable<Visits> GetAll();

    }
}
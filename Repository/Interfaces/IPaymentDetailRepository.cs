﻿using System;
using System.Collections.Generic;
using Domain;

namespace Repository.Interfaces
{
    public interface IPaymentDetailRepository
    {

        public IEnumerable<PaymentDetail> GetAll();

    }
}
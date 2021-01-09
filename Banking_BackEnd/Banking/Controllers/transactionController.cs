using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Banking.Models;
using System.Web.Http.Cors;
namespace Banking.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class transactionController : ApiController
    {
        public HttpResponseMessage GetUser(int id)
        {
            using (BankingDbEntities db = new BankingDbEntities())
            {
                var data = db.UsersAccounts.Where(a => a.Customer_Id == id).First();
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
        }
        public HttpResponseMessage GetTransaction(int id)
        {
            using (BankingDbEntities db = new BankingDbEntities())
            {
                var data = db.Transactions.Where(a => a.From_Account_Number == id).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
        }
        public HttpResponseMessage GetTransaction(int id, int tr)
        {
            using (BankingDbEntities db = new BankingDbEntities())
            {
                var data = db.Transactions.Where(a => a.From_Account_Number == id).ToList();
                Transaction t = new Transaction();
                foreach (var i in data)
                {
                    if (i.Transaction_Id == tr)
                    {
                        t = i;
                        break;
                    }
                }
                if (t != null)
                    return Request.CreateResponse(HttpStatusCode.OK, t);
                else
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Transaction with transactoin id= " + id + " not found");
            }
        }

        public HttpResponseMessage PostTransaction(int id, [FromBody] Transaction d)
        {
            try
            {
                using (BankingDbEntities db = new BankingDbEntities())
                {
                    d.From_Account_Number = id;
                    d.Transaction_Date = DateTime.Now;
                    var data = db.UsersAccounts.Find(id);
                    if (d.Amount > data.Balance)
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Insufficient fund");
                    else
                    {
                        db.Transactions.Add(d);
                        db.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.Created, d);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
        public HttpResponseMessage GetBenificiary(int id)
        {
            using (BankingDbEntities db = new BankingDbEntities())
            {
                var data = db.Beneficiaries.Where(a => a.User_Account == id).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, data);
            }
        }
        public HttpResponseMessage GetLastTransaction(int id)
        {
            using (BankingDbEntities db = new BankingDbEntities())
            {
                var data = db.Transactions.Where(a => a.From_Account_Number == id).ToList();
                int last = data.Count();
                return Request.CreateResponse(HttpStatusCode.OK, data[last - 1]);
            }
        }
    }
}

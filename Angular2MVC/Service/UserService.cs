using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using Angular2MVC.Models;
using NHibernate;
using NHibernate.Linq;
using Remotion.Linq.Parsing.Structure.IntermediateModel;

namespace Angular2MVC.Service
{
    public static class UserService
    {
        public static string VidateUser(User user)
        {
            using (ISession session = NHibertnateSession.OpenSession())
            {
                StringBuilder query = new StringBuilder();
                query.Append("SELECT u.Username FROM User u WHERE u.Username='").Append(user.Username).Append("' and u.Password= '").Append(user.Password).Append("'");
                var specificFields = session.CreateQuery(query.ToString()).List();

                if (specificFields.Count == 1)
                    return "True";
                return "False";
                //return View(employees);
            }
        }
    }
}
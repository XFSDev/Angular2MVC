using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.Models
{
    public class User
    {
        public virtual int Userid { get; set; }
        public virtual string Username { get; set; }
        public virtual string Password { get; set; }
        public virtual string Emailid { get; set; }
        public virtual string Role { get; set; }
    }
}
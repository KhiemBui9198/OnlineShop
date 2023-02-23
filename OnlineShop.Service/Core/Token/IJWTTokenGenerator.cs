using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace Service.Core.Token
{
	public interface IJWTTokenGenerator
	{
		string GenerateToken(IdentityUser user, IList<string> roles, IList<Claim> claims);
	}
}
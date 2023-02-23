using System.Threading.Tasks;

namespace OnlineShop.Service.Core.Email
{
	public interface IEmailSenders
	{
		Task SendEmailAsync(string fromAddress, string toAddress, string subject, string message);
	}
}
using FluentValidation;
using Service.DTOs;

namespace mhsa.internal_user.Validators
{
    public class UserValidator : AbstractValidator<UserCredentialsDTO>
    {
        public UserValidator()
        {
            RuleFor(x => x.Username).NotEmpty().WithMessage("Debe proveer un nombre de usuario");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Debe proveer una contraseña");
        }
    }
}

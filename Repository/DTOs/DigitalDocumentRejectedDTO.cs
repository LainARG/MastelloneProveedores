using System;

public class DigitalDocumentRejectedDTO
{

	public int Id_rechazo;
	public int Codigo_motivo_rechazo;
	public int Id_documento_electronico;
	public string Observaciones;
	public string Mail_informacion_rechazo;
	public string Fecha_rechazo;
	public string Usuario_rechazo;


	public DigitalDocumentRejectedDTO(int id_rechazo, int codigo_motivo_rechazo, int id_documento_electronico, string observaciones, string mail_informacion_rechazo, string fecha_rechazo, string usuario_rechazo)
	{
		this.Id_rechazo = id_rechazo;
		this.Codigo_motivo_rechazo = codigo_motivo_rechazo;
		this.Id_documento_electronico = id_documento_electronico;
		this.Observaciones = observaciones;
		this.Mail_informacion_rechazo = mail_informacion_rechazo;
		this.Fecha_rechazo = fecha_rechazo;
		this.Usuario_rechazo = usuario_rechazo;
	}



}

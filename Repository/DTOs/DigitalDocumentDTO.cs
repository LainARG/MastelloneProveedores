using System;

public class DigitalDocumentDTO
{

	public string img;
	public int id;
	public object name;
	public object date;
	public object type;
	public int size;
	public decimal cuit;


	public DigitalDocumentDTO(string img, int id, object name, object date, object type,int size, decimal cuit)
	{
		this.img = img;
		this.id = id;
		this.name = name;
		this.date = date;
		this.size = size;
		this.type = type;
		this.cuit = cuit;
	}



}

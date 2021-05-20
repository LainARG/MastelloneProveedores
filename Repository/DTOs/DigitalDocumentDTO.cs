using System;

public class DigitalDocumentDTO
{

	public string img;
	public int id;
	public object name;
	public object date;
	public object type;
	public int size;


	public DigitalDocumentDTO(string img, int id, object name, object date, object type,int size)
	{
		this.img = img;
		this.id = id;
		this.name = name;
		this.date = date;
		this.size = size;
		this.type = type;
	}



}

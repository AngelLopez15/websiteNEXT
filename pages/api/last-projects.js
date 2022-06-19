export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": 1,
        "title": "Proyecto 1",
        "description": "Descripción proyecto 1",
        "imagen": "/images/project-1.jpg"
      },
      {
        "id": 2,
        "title": "Proyecto 2",
        "description": "Descripción proyecto 2",
        "imagen": "/images/project-2.jpg"
      },
      {
        "id": 3,
        "title": "Proyecto 3",
        "description": "Descripción proyecto 3",
        "imagen": "/images/project-3.jpg"
      },
      {
        "id": 4,
        "title": "Proyecto 4",
        "description": "Descripción proyecto 4",
        "imagen": "/images/project-4.jpg"
      }
    ]
  )
}
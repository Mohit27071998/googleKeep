import React from "react";
import "../CreateNote/CreateNote.css";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const DisplayNote = ({
  notes,
  handleDelete,
  handleEdit,
  search,
  originalNoteOrder,
}) => {
  const sortedNote = [...originalNoteOrder].sort((a, b) => {
    if (search) {
      const titleAIncludesSearch = a.title.includes(search);
      const titleBIncludesSearch = b.title.includes(search);

      if (titleAIncludesSearch && !titleBIncludesSearch) return -1;
      if (!titleAIncludesSearch && titleBIncludesSearch) return 1;
    }

    return 0;
  });
  const displayNoteOrder = search ? sortedNote : originalNoteOrder;

  return (
    <div className="displaynote">
      {displayNoteOrder.map((e, i) => (
        <div
          key={e.id}
          className={
            search && e.title.includes(search.toLowerCase())
              ? "note highlighted"
              : "note"
          }
          style={{ backgroundColor: e.color || "#ffffff" }}
        >
          <div className="title">{e.title}</div>
          <div className="desc">{e.desc}</div>
          <div className="button">
            <MdDeleteOutline
              onClick={() => handleDelete(e.id)}
              className="buticon"
            />
            <MdEdit onClick={() => handleEdit(e.id)} className="buticon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayNote;

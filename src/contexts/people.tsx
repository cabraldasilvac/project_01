import React, { createContext, useState, useEffect } from "react";

interface iRegisterPeople {
  id: number;
  name: string;
}

interface iPeopleProviderFunctions {
  set_id_edit: (id: number) => void;
  register_people: (data: iRegisterPeople) => void;
  edit_people: (data: iRegisterPeople) => void;
  delete_people: (id: number) => void;
  peopleDatabase: iRegisterPeople[];
  idToEdit: number;
}

interface iPeopleProviderProps {
  children: React.ReactNode;
}

export const PeopleContext = createContext<iPeopleProviderFunctions>(
  {} as iPeopleProviderFunctions
);

export const PeopleProvider = ({ children }: iPeopleProviderProps) => {
  const createKey = () => Math.floor(Math.random() * 1029384756102201);

  const [peopleDatabase, setPeopleDatabase] = useState([] as iRegisterPeople[]);

  const [idToEdit, setIdToEdit] = useState(0);

  useEffect(() => {
    const checkPeopleData = localStorage.getItem("@project01_people_database");

    if (checkPeopleData) {
      setPeopleDatabase(JSON.parse(checkPeopleData));
    }
  }, []);

  const set_id_edit = (id: number) => {
    setIdToEdit(id);
  };
  const register_people = (data: iRegisterPeople) => {
    const new_person = {
      id: createKey(),
      name: data.name,
    };

    const newData = [...peopleDatabase, new_person];
    setPeopleDatabase(newData);
    localStorage.setItem("@project01_people_database", JSON.stringify(newData));
    return newData;
  };

  const edit_people = (data: iRegisterPeople) => {
    const editted_person = {
      id: idToEdit,
      name: data.name,
    };

    const newDataBase = peopleDatabase.map((person) => {
      if (person.id === idToEdit) {
        return editted_person;
      } else {
        return person;
      }
    });
    setPeopleDatabase(newDataBase);
    localStorage.setItem(
      "@project01_people_database",
      JSON.stringify(newDataBase)
    );
    setIdToEdit(0);
  };

  const delete_people = (id: number) => {
    const newDataBase = peopleDatabase.filter((person: { id: number }) => {
      return person.id !== id;
    });
    setPeopleDatabase(newDataBase);
    localStorage.setItem(
      "@project01_people_database",
      JSON.stringify(newDataBase)
    );
    setIdToEdit(0);
  };

  return (
    <PeopleContext.Provider
      value={{
        set_id_edit,
        register_people,
        edit_people,
        delete_people,
        peopleDatabase,
        idToEdit,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

use db;

CREATE TABLE makeTeam(
    groupName VARCHAR(50),
    class varchar(50),
    section INT,
    building VARCHAR(100),
    classroom VARCHAR(50),
    endTime TIME(7),
    PRIMARY KEY (groupName)
);

INSERT INTO makeTeam (groupName, class, section, building, classroom, endtime)
VALUES ('Pepper', 'CS 4337', 003, 'ECSW', '1.102', '13:50'),
       ('Salt', 'CS 2365', 002, 'SCI', '2.304', '14:50'),
       ('Sugar', 'CS 1337', 001, 'ECSW', '1.102', '15:50'),
       ('Bonito', 'SE 4490', 510, 'FN', '1.093', '17:30'),
       ('Cinnamon', 'CS 4337', 500, 'ECSW', '2.504', '18:30'),
       ('Nutmeg', 'BIOL 1556', 004, 'SCI', '3.002', '19:00');

-- CREATE TABLE IF NOT EXISTS usernames (
--   id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
--   username VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS whodunnit (
--     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
--     guess VARCHAR(255) NOT NULL,
--     theory TEXT NOT NULL,
--     username_id INTEGER REFERENCES usernames(id)
-- );

-- INSERT INTO usernames(username) VALUES ('BeccaB123');

-- INSERT INTO whodunnit(guess,theory,username_id) VALUES ('Butler','Looked shifty in ep2!',1);

-- INSERT INTO usernames(username) VALUES ('L.E.Mentary');
-- INSERT INTO usernames(username) VALUES('Clueminati');
-- INSERT INTO usernames(username) VALUES('SaulVencrimes');

-- INSERT INTO whodunnit(guess,theory,username_id) VALUES ('Heiress','Cmon she clearly has a secret twin!',5);
-- INSERT INTO whodunnit(guess,theory,username_id) VALUES ('Reverend','He is the only one with proper motive.',6);
-- INSERT INTO whodunnit(guess,theory,username_id) VALUES ('Heiress','Checking the silverware BEFORE the knife was found!',7);
-- INSERT INTO whodunnit(guess,theory,username_id) VALUES ('Butler','The butler is Tim Curry. Need I say more!?',7);
-- INSERT INTO whodunnit(guess,theory,username_id) VALUES ('Butler', 'Ep 6 is a Sunday...No post on Sundays! Alibi is bogus',5);
-- INSERT INTO whodunnit(guess,theory,username_id) VALUES ('Reverend', 'Guys for real. The sermon about forgivness was LOADED',6);
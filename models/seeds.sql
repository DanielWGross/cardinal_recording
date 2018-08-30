-- Interface(s):

INSERT INTO Equipment (name, interface)
VALUES  ('Focusrite : Scarlett 18i20 (X2)', 1),
        ('Universal Audio: Apollo Twin', 1);

-- Mic Preamp(s):

INSERT INTO Equipment (name, mic_preamp)
VALUES  ('SSL : Alpha VHD Analog Four Channel', 1),
        ('Rupert Neve : Portico 5012', 1);

-- Monitor(s):

INSERT INTO Equipment (name, monitor)
VALUES  ('Yamaha : HS8 Monitoring Speakers', 1),
        ('Mackie : HR824 Monitoring Speakers', 1);

-- Headphone(s):

INSERT INTO Equipment (name, headphone)
VALUES  ('AKG : K240 Studio Headphones', 1),
        ('Samson : SR950 Studio Headphones', 1);

-- Plug-ins:
  -- Effect(s):

INSERT INTO Equipment (name, plugin_effects)
VALUES  ('Celemony : Melodyne DNA Digital Vocal Correction', 1),
        ('Synchro Arts :  VocALign', 1),
        ('Imperical Labs : BBE Sonic Suite', 1);

-- Plug-ins:
  -- WAVES:

INSERT INTO Equipment (name, plugin_waves)  
VALUES  ('Silver Native Collection', 1),
        ('Studio Classics Collection : Channel Strips, EQ’s and Compressors', 1),
        ('Solid State Logic, Neve and API', 1),
        ('CLA Classic Compressors Based on “Blackey/Bluey”', 1),
        ('UA 1176 and Teletronix & LA-2A Limiters / Compressors', 1),
        ('Kramer HLS Channel EQ Strip', 1),
        ('Manny Marroquin Reverb', 1),
        ('Manny Marroquin Delay', 1),
        ('Morphoder Vocal Synthesizer', 1),
        ('Sound Shifter', 1),
        ('C6 Multiband Compressor', 1),
        ('Reel ADT Pitch Warp / Delay Modulator', 1);

-- Plug-ins:
  -- Slate Digital:

INSERT INTO Equipment (name, plugin_slate_digital)  
VALUES  ('Virtual Console Collection : FG-116', 1),
        ('Virtual Console Collection : FG-401 Compressors', 1),
        ('Virtual Console Collection : FG-S', 1),
        ('Virtual Console Collection : FG-N', 1),
        ('Virtual Console Collection : EQ', 1),
        ('Virtual Console Collection : Trimmer', 1),
        ('Virtual Console Collection : Revival', 1),
        ('Virtual Tape Machine', 1),
        ('Trigger 2 Drum Sampler - Platinum Bundle, Terry Date Collection', 1), 
        ('FG-X Mastering Strip', 1);

-- Plug-ins:
  -- Slate Digital:

INSERT INTO Equipment (name, plugin_fab_filter)
VALUES  ('Pro-R : High-End Reverb', 1),
        ('Pro-Q 2 : Twenty-Four Band Equalizer', 1),
        ('Pro-C 2 :  Compressor', 1),
        ('Pro DS : De-essing Plug-in', 1),
        ('Pro-L 2 : Peak Limiter', 1),
        ('Pro-G : Gate / Expander', 1),
        ('Pro-MB : Multiband Compressor / Expander', 1),
        ('Twin-2 : Synthesizer', 1),
        ('Timeless 2 : Tape Delay', 1),
        ('Saturn : Multiband Distortion, Saturation and Amp Modelling Plug-in', 1),
        ('Volcano : Multiband Envelope Warp Modulator', 1);

-- Plug-ins:
  -- Izotope:

INSERT INTO Equipment (name, plugin_izotope)
VALUES  ('Vinyl Saturation Enhancer', 1);

-- Plug-ins:
  -- Soundtoys:

INSERT INTO Equipment (name, plugin_soundtoys)
VALUES  ('Decapitator : Saturation / Distortion', 1),
        ('Little Plate : Reverb', 1),
        ('Little Radiator : Saturation', 1),
        ('Little Alter Boy : Pitch Modulation', 1),
        ('Little Micro Shift : Widener', 1),
        ('Devil Loc Delux : Compression', 1);

-- Microphones

INSERT INTO Equipment (name, microphone)
VALUES  ('AKG : C214 x2, AKG D112, Perception 200 x2', 1),
        ('Shure : Beta 52a, SM57, SM7b, SM81', 1),
        ('Audix : i5', 1),
        ('Sennheiser : E602, e902, MD 421 II', 1),
        ('Audio Technica : 3035', 1),
        ('Rode : M5 (Matched Pair)', 1),
        ('Neumann : TLM 103', 1);

-- Cables

INSERT INTO Equipment (name, cable)
VALUES  ('Monster : XLR and 1/4"', 1),
        ('Mogami : XLR', 1);

-- Instruments:
  -- Guitar(s):

INSERT INTO Equipment (name, instrument_guitar)
VALUES  ('Gibson Les Paul Studio', 1),
        ('PRS Custom 24', 1),
        ('Taylor Acoustic', 1);

-- Instruments:
  -- Bass(s):

INSERT INTO Equipment (name, instrument_bass)
VALUES  ('Gibson Grabber Bass', 1),
        ('Fender Jazz Bass Special', 1),
        ('Fender P-Bass', 1);

-- Instruments:
  -- Drum(s):

INSERT INTO Equipment (name, instrument_drum)
VALUES  ('Pearl Export Drum Set', 1);

-- Instruments:
  -- MIDI(s):

INSERT INTO Equipment (name, instrument_midi)
VALUES  ('Novation Launchkey 49 Midi Keyboard', 1);

-- Amp(s):

INSERT INTO Equipment (name, amp)
VALUES  ('Marshall : JCM 2000', 1),
        ('Orange : Rockerverb 50', 1),
        ('Peavey : 5150', 1),
        ('Fender : Modified 1974 Delux Twin Reverb', 1),
        ('Kemper Profiling Amp', 1); 

-- Cab(s):

INSERT INTO Equipment (name, cab)
VALUES  ('Mesa: Recto Cab 4x12', 1),
        ('Marshall : 4x12 w/ Celestian Greenback 1960 Cab', 1);

-- Pedal(s):

INSERT INTO Equipment (name, pedal)
VALUES  ('Sans Amp : D.I.', 1),
        ('Electro Harmonix : Pi Big Muff (Bass)', 1),
        ('Electro Harmonix : Big Muff (Guitar)', 1),
        ('Dark Glass : BK7 Micro Tube', 1),
        ('Ibanez : Tube Screamer', 1),
        ('Ratt : Distortion', 1),
        ('T-Rex : Delay', 1),
        ('Fulltone : OCD', 1),
        ('Boss : OC-3', 1),
        ('MXR-288 : Bass Octave', 1),
        ('Korg Rack Tuner', 1),
        ('Joyo : Vintage Overdrive', 1),
        ('Joyo : Delux Distortion', 1),
        ('Joyo : Delux Crunch', 1),
        ('T.C. Electronics : Rottweiler', 1),
        ('Classic Wah', 1),
        ('Ebow', 1);

-- Client(s):

INSERT INTO Clients (name, picture_url, soundcloud_url)
VALUES  ('Andorra', "img/andorra.jpg", "https://soundcloud.com/cardinal-recordings/elephants"),
        ('Daddylap', "img/daddylap.jpg", "https://soundcloud.com/cardinal-recordings/submerged?in=cardinal-recordings/sets/clients"),
        ('Here : Now', "img/here_now.jpg", "https://soundcloud.com/cardinal-recordings/dont-move?in=cardinal-recordings/sets/clients"),
        ('Steve Sheets', "img/steve_sheets.jpg", "https://soundcloud.com/cardinal-recordings/all-i-know?in=cardinal-recordings/sets/clients"),
        ('Taking October', "img/taking_october.jpg", "https://soundcloud.com/cardinal-recordings/bullet-dreams"),
        ('Andorra: Etc, Etc, Etc', "img/andorra_2.jpg", "https://soundcloud.com/cardinal-recordings/elephants"),
        ('Taking October: Sleeping With Ghosts', "img/taking_october_2.jpg", "https://soundcloud.com/cardinal-recordings/bullet-dreams");

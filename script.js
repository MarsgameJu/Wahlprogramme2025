// script.js
const data = [
    { partei: "CDU-CSU", thema: "Kandidat*in", position: "Friedrich Merz" },
    { partei: "Bündnis 90/Die Grünen", thema: "Kandidat*in", position: "Robert Habeck" },
    { partei: "SPD", thema: "Kandidat*in", position: "Olaf Scholz" },
    { partei: "AFD", thema: "Kandidat*in", position: "Alice Weidel" },
    { partei: "FDP", thema: "Kandidat*in", position: "Christian Lindner" },
    { partei: "Die Linke", thema: "Kandidat*in", position: "Heidi Reichinnek und Jan van Aken" },
    { partei: "BSW", thema: "Kandidat*in", position: "Sahra Wagenknecht" },
    { partei: "CDU-CSU", thema: "Klima", position: "-<strong>Option auf Atom:</strong> Prüfen der Wiederinbetriebnahme abgeschalteter Kernkraftwerke und Fokus auf Kernenergie der 4. und 5. Generation.<br> -<strong>Emissionshandel:</strong> Setzt auf marktwirtschaftliche Instrumente für den Klimaschutz.<br> -<strong>Pariser Klimaziele:</strong> Einhaltung durch effiziente Maßnahmen wie den Emissionshandel." },
    { partei: "Bündnis 90/Die Grünen", thema: "Klima", position: "- <strong>Kohleausstieg</strong>: Bis 2030 keine Kohlekraftwerke mehr, klimaneutraler Strom bis 2035.<br>- <strong>Erneuerbare Energien</strong>: Ausbau der Infrastruktur für Wind- und Solarenergie; Förderung von grünem Wasserstoff.<br>- <strong>Klimageld</strong>: Rückerstattung von CO₂-Bepreisungen an Menschen mit niedrigem und mittlerem Einkommen.<br>- <strong>Kreislaufwirtschaft</strong>: Weniger Primärrohstoffe, mehr Recycling und nachhaltige Produktionsprozesse.<br>- <strong>Energiepreise</strong>: Senkung der Stromkosten auf europäisches Minimum." },
    { partei: "SPD", thema: "Klima", position: "- <strong>Nachhaltigkeit:</strong> Förderung einer klimafreundlichen Wirtschaft  <br> - <strong>Energiewende:</strong> Ausbau erneuerbarer Energien  <br> - <strong>CO₂-Bepreisung:</strong> Einführung einer sozial verträglichen Regelung  <br> - <strong>Sozialer Ausgleich:</strong> Berücksichtigung sozialer Gerechtigkeit" },
    { partei: "AFD", thema: "Klima", position: "- <strong>Atomkraft und fossile Energien:</strong> Forderung nach Rückkehr zur Atomkraft, Wiederaufnahme russischer Gaslieferungen und Verlängerung der Laufzeiten für Kohlekraftwerke.<br>- <strong>Gegen Wind- und Solarkraft:</strong> Abschaffung von Subventionen und Vorrangeinspeisung, um den Ausbau von Wind- und Solarparks zu stoppen.<br>- <strong>CO2-Abgabe abschaffen:</strong> Maßnahmen gegen zusätzliche Abgaben auf fossile Energieträger.<br>- <strong>Umwelt- und Klimapolitik:</strong> Fokus auf „technologieoffene“ Lösungen und Abkehr von ideologischen Klimaschutzmaßnahmen." },
    { partei: "FDP", thema: "Klima", position: "- <strong>Energiepolitik:</strong> Ausbau der heimischen Erdgasförderung, Förderung sicherer Kernkraftwerke, Reduktion der Stromsteuer.<br> - <strong>Emissionshandel:</strong> Als zentrales Klimainstrument; Ziel der Klimaneutralität erst bis 2050.<br> - <strong>Regulierungsabbau:</strong> Abschaffung der EEG-Subventionen und Reform des Heizungsgesetzes." },
    { partei: "Die Linke", thema: "Klima", position: " <strong>-Energiewende:</strong> 100 % erneuerbare Energien, dezentral organisiert. Verzicht auf Atomenergie. Die größten Klimasünder sollen die Kosten tragen.<br> - <strong>Mobilität:</strong> Kostenfreier ÖPNV als Ziel, Förderung nachhaltiger Verkehrsinfrastruktur.<br> - <strong>Heizung:</strong> Unterstützung beim Heizungsumbau und Ablehnung des CO2-Preises." },
    { partei: "BSW", thema: "Klima", position: "- <strong>Rücknahme:</strong> Verbrenner-Verbot und Heizungsgesetz.<br> - <strong>Förderung:</strong> Technologieoffenheit und Innovation in CO2-Reduktionstechnologien.<br> - <strong>Erhalt:</strong> Gasnetze als Rückfalloption bei Energieversorgung.<br> - <strong>Fokus:</strong> Entwicklung von Speichertechnologien und erneuerbaren Energien.<br> - <strong>CO2-Abgabe:</strong> Abschaffung, Ausbau der Fernwärmenetze stattdessen." },
    { partei: "CDU-CSU", thema: "Außen- und Sicherheitspolitik", position: "-<strong>Ukraine-Unterstützung:</strong> Diplomatische, finanzielle und militärische Unterstützung für die Ukraine.<br> -<strong>Wehrpflicht:</strong> Einführung einer „aufwachsenden Wehrpflicht“ in Verbindung mit einem Gesellschaftsjahr.<br> -<strong>China-Politik:</strong> Selbstbewusste Haltung gegenüber China." },
    { partei: "Bündnis 90/Die Grünen", thema: "Außen- und Sicherheitspolitik", position: "- <strong>Ukraine</strong>: Umfassende Unterstützung mit Waffen, Finanzen und humanitärer Hilfe; Förderung eines starken Friedensprozesses.<br>- <strong>Verteidigung</strong>: Verteidigungsausgaben dauerhaft über 2 % des BIP; Modernisierung der Bundeswehr.<br>- <strong>Europäische Union</strong>: Vertiefung der Zusammenarbeit und Erweiterung der EU; Förderung von Innovation und grünen Technologien.<br>- <strong>Globale Klimapolitik</strong>: Internationale Partnerschaften für Klimaschutz und nachhaltige Entwicklung.<br>- <strong>Geopolitik</strong>: Stärkung des Multilateralismus und der regelbasierten Weltordnung; kritische Position zu autoritären Staaten wie China." },
    { partei: "SPD", thema: "Außen- und Sicherheitspolitik", position: "- <strong>Friedenspolitik</strong>: Ablehnung von Angriffskriegen, Förderung starker UN und einer gerechten Weltwirtschaftsordnung  <br>- <strong>Menschenrechte</strong>: Betonung friedlicher Konfliktlösung und Schutz der Menschenrechte  <br>- <strong>Verteidigung</strong>: Erhöhung der Verteidigungsausgaben auf 2 % des BIP, Modernisierung der Bundeswehr  <br>- <strong>NATO</strong>: Stärkere Verantwortung Europas und Zusammenarbeit mit dem Globalen Süden  <br>- <strong>Ukrainehilfe</strong>: Diplomatische, militärische, finanzielle und humanitäre Unterstützung „so lange wie nötig“  <br>- <strong>Rüstungsexporte</strong>: Ablehnung der Lieferung von Taurus-Marschflugkörpern  " },
    { partei: "AFD", thema: "Außen- und Sicherheitspolitik", position: "- <strong>Russlandpolitik:</strong> Aufhebung der Sanktionen gegen Russland, keine Verurteilung des Ukraine-Krieges und Forderung nach Neutralität der Ukraine.<br> - <strong>„Dexit“ und EU-Reform:</strong> Forderung nach einem EU-Austritt Deutschlands oder einer Rückkehr zu einem „Europa der Vaterländer“.<br> - <strong>Verteidigung:</strong> Wiederherstellung der Wehrfähigkeit, Ausbau des Zivilschutzes und Modernisierung der Bundeswehr." },
    { partei: "FDP", thema: "Außen- und Sicherheitspolitik", position: "- <strong>Ukraine:</strong> Unverzügliche Lieferung von Waffen, Beitrittsperspektive zur EU und NATO unterstützen.<br> - <strong>Verteidigung:</strong> Bundeswehr zur stärksten Streitkraft in Europa ausbauen; 2 %-Ziel der NATO erfüllen.<br> - <strong>Außenpolitik:</strong> Reduzierung der wirtschaftlichen Abhängigkeit von China; Unterstützung eines Zwei-Staaten-Modells im Nahost-Konflikt." },
    { partei: "Die Linke", thema: "Außen- und Sicherheitspolitik", position: "- <strong>Abrüstung:</strong> Rückzug der Bundeswehr aus Auslandseinsätzen, Stärkung ziviler Konfliktprävention.<br> - <strong>EU:</strong> Neustart der EU als soziale und ökologische Friedensunion, europaweite Mindeststandards für Soziales und Umwelt." },
    { partei: "BSW", thema: "Außen- und Sicherheitspolitik", position: "- <strong>Friedenspolitik:</strong> Verbot von Waffenexporten in Kriegsgebiete.<br> - <strong>Reduzierung:</strong> Militärausgaben und Abrüstungsinitiativen.<br> - <strong>Diplomatie:</strong> Förderung von Verhandlungen und multipolaren Lösungen.<br> - <strong>Ukraine:</strong> Unterstützung chinesischer Friedensinitiativen und kein Steuergeld mehr für den Krieg.<br> - <strong>EU:</strong> Ablehnung von Erweiterungen und Fokussierung auf Kernaufgaben." },
    { partei: "CDU-CSU", thema: "Soziales", position: "-<strong>Bürgergeld:</strong> Abschaffung zugunsten einer „Neuen Grundsicherung“. <br> -<strong>Steuerfreiheit für Senioren:</strong> 2.000 Euro des Einkommens steuerfrei bei Erwerbstätigkeit im Rentenalter.<br> -<strong>Frühstart-Rente:</strong> Einführung eines staatlich geförderten Rentendepots für Kinder." },
    { partei: "Bündnis 90/Die Grünen", thema: "Soziales", position: "- <strong>Kindergeld und Kinderrechte</strong>: Kopplung des Kindergeldes an den Kinderfreibetrag; Verankerung von Kinderrechten im Grundgesetz.<br>- <strong>Pflege</strong>: Verbesserung der Arbeitsbedingungen und Rückgewinnung von Pflegekräften; Ausweitung mobiler Pflegeangebote in ländlichen Regionen.<br>- <strong>Inklusion</strong>: Förderung einer inklusiven Gesellschaft und gleichberechtigter Teilhabe für Menschen mit Behinderungen.<br>- <strong>Wahlalter</strong>: Senkung auf 16 Jahre, um politische Mitbestimmung der Jugend zu fördern.<br>- <strong>Bezahlbarer Wohnraum</strong>: Mietpreisbremse verschärfen, Förderung sozialen Wohnungsbaus." },
    { partei: "SPD", thema: "Soziales", position: "- <strong>Gleichberechtigung und soziale Teilhabe:</strong> Förderung einer solidarischen Gesellschaft mit Integration und Chancengleichheit, insbesondere durch Bildung und stärkere Arbeitnehmerrechte.<br>- <strong>Wohnraum und Inklusion:</strong> Unterstützung des sozialen Wohnungsbaus, unbefristete Mietpreisbremse und verbesserte Barrierefreiheit für Menschen mit Behinderungen.<br>- <strong>Sicherung des Rentenniveaus:</strong> Rentenniveau bleibt bei 48 %, abschlagsfreier Renteneintritt nach 45 Beitragsjahren, keine Anhebung des Rentenalters.<br>- <strong>Verlängerung der Elternzeit:</strong> Zwei Wochen Freistellung nach der Geburt bei voller Lohnfortzahlung, Elterngeldbezug auf 18 Monate verlängert, kostenlose Mittagessen in Kitas und Grundschulen.<br>- <strong>Bürgerversicherung:</strong> Einführung einer solidarischen Bürgerversicherung, in die alle Erwerbstätigen einzahlen.<br>- <strong>Mindestlohn</strong>: Anhebung auf 15 Euro ab 2026" },
    { partei: "AFD", thema: "Soziales", position: "- <strong>Rentenreform:</strong> Flexibler Renteneintritt, höhere Renten und Ausweitung der Beitragszahlerbasis, einschließlich Beamter und Politiker.<br>- <strong>Bürgergeld:</strong> Verschärfte Regeln für Leistungsbezug, Förderung von gemeinnütziger Arbeit und striktere Sanktionen bei Pflichtverletzungen.<br>- <strong>Familienförderung:</strong> Einführung einer Willkommensprämie für Neugeborene, mehr Kindergärten und Unterstützung bei Eigenbetreuung.<br>- <strong>Pflege und Behinderte:</strong> Verbesserung der häuslichen Betreuung und Anhebung der Mindestlöhne in Behindertenwerkstätten." },
    { partei: "FDP", thema: "Soziales", position: "- <strong>Arbeitsmarkt:</strong> Bürgergeld zu einer aktivierenden Sozialleistung reformieren; flexibler Renteneintritt mit Anreizen für spätere Rente.<br> - <strong>Familienförderung:</strong> Betreuungskosten und Unterhaltsleistungen steuerlich besser absetzbar; überarbeitetes Elterngeld.<br> - <strong>Gesundheit:</strong> Beiträge für App-Nutzer*innen senken; selbstbestimmtes Sterben rechtlich stärken." },
    { partei: "Die Linke", thema: "Soziales", position: "- <strong>Mindestsicherung:</strong> Sanktionsfreie Mindestsicherung und Mindestrente von 1.400 €.<br>- <strong>Gleichberechtigung:</strong> Gerechte Verteilung von Arbeit zwischen den Geschlechtern, Maßnahmen gegen Gewalt an Frauen, gleicher Lohn für gleiche Arbeit.<br>- <strong>Wohnraum: </strong>Einführung eines bundesweiten Mietendeckels, Förderung von sozialem Wohnungsbau, Begrenzung von Mieterhöhungen.<br>- <strong>Lebensmittel und Energie: </strong>Mehrwertsteuerbefreiung für Grundnahrungsmittel und Energie, Preiskontrollen und ein preisgünstiger Sockeltarif." },
    { partei: "BSW", thema: "Soziales", position: "- <strong>Mindestlohn:</strong> Erhöhung auf 15 Euro.<br> - <strong>Rente:</strong> Einführung eines Modells nach österreichischem Vorbild.<br> - <strong>Bürgerversicherung:</strong> Abschaffung der Zwei-Klassen-Medizin.<br> - <strong>Pflege:</strong> Steuerfinanzierte Pflegevollversicherung zur Kostenentlastung.<br><strong>Wohnen:</strong><br>- <strong>Mietpreise:</strong> Deckelung und Einfrieren bis 2030 in überteuerten Regionen.<br>- <strong>Eigenheim:</strong> Abschaffung der Grunderwerbssteuer für das erste selbst genutzte Eigenheim." },
    { partei: "CDU-CSU", thema: "Finanzen", position: "-<strong>Einkommenssteuer:</strong> Abflachung des Steuertarifs und Erhöhung der Einkommensgrenze für Spitzensteuersatz.<br> -<strong>Schuldenbremse:</strong> Beibehaltung und Prüfung aller Ausgaben.<br> -<strong>Steuerreform:</strong> Niedrigere Unternehmenssteuern und Senkung der Mehrwertsteuer in der Gastronomie." },
    { partei: "Bündnis 90/Die Grünen", thema: "Finanzen", position: "- <strong>Deutschlandfonds</strong>: Finanzierung von Infrastruktur, Bildung und Klimaschutzprojekten, ohne laufende Ausgaben zu belasten.<br>- <strong>Schuldenbremse</strong>: Reform zur Ermöglichung von Investitionen; Sicherstellung der langfristigen Tragfähigkeit der Verschuldung.<br>- <strong>Steuererleichterungen</strong>: Anhebung von Grundfreibeträgen und Arbeitnehmerpauschbeträgen; Reform des Ehegattensplittings für Neuehen.<br>- <strong>Nachhaltige Subventionen</strong>: Abbau von klima- und umweltschädlichen Subventionen; Geldanlagen des Staates nachhaltig ausrichten." },
    { partei: "SPD", thema: "Finanzen", position: "- <strong>Steuerpolitik</strong>: Einführung einer Vermögenssteuer für Spitzenvermögen  <br>- <strong>Besteuerung</strong>: Gerechte Besteuerung von Kapital- und Arbeitseinkommen  <br>- <strong>Investitionen</strong>: Stärkung öffentlicher und privater Investitionen durch einen Deutschlandfonds, ohne Privatisierung der Infrastruktur  <br>- <strong>Entlastung</strong>: Reform der Einkommenssteuer zur Entlastung von 95 % der Steuerzahlenden  <br>- <strong>Lebensmittelpreise</strong>: Senkung des ermäßigten Mehrwertsteuersatzes für Lebensmittel auf 5 %" },
    { partei: "AFD", thema: "Finanzen", position: "- <strong>Steuervereinfachung:</strong> Abschaffung der CO2-Abgabe, Senkung der Einkommens- und Unternehmenssteuern sowie Vereinfachung des Steuerrechts.<br>- <strong>Solide Haushaltspolitik:</strong> Konsolidierung des Bundeshaushalts und Einhaltung der Schuldenbremse.<br>- <strong>Staatliche Subventionen:</strong> Reduzierung von Finanzhilfen für Nichtregierungsorganisationen und Überprüfung der Kosten der Asylpolitik.<br>- <strong>Währungspolitik:</strong> Austritt aus dem Euro-System und Wiedereinführung der D-Mark als nationale Währung." },
    { partei: "FDP", thema: "Finanzen", position: "- <strong>Schuldenbremse:</strong> Beibehalten; linear-progressiver Einkommensteuertarif mit höherem Grundfreibetrag.<br> - <strong>Förderung von Aktionärskultur:</strong> Finanzbildung verbessern; keine Vermögens- oder Finanztransaktionssteuer.<br> - <strong>Digitalisierung:</strong> Einführung einer automatisierten Steuererklärung („Easy Tax“)." },
    { partei: "Die Linke", thema: "Finanzen", position: "-<strong> Steuergerechtigkeit:</strong> Reform der Einkommenssteuer, steuerfreie Einkommen bis 16.800 €, Umverteilung durch Vermögens- und Reichensteuer.<br> -<strong> Gesundheit:</strong> Einführung einer solidarischen Bürgerversicherung, Abschaffung der Trennung zwischen gesetzlicher und privater Krankenversicherung." },
    { partei: "BSW", thema: "Finanzen", position: "- <strong>Steuerentlastung:</strong> Erhöhung des Grundfreibetrags und Steuerbefreiung für Renten bis 2000 Euro.<br> - <strong>Kapitalerträge:</strong> Gleichbesteuerung mit Arbeitseinkommen.<br> - <strong>Vermögenssteuer:</strong> Einführung für Vermögen über 25 Millionen Euro.<br> - <strong>Investitionen:</strong> Förderung durch Industriefonds und Forschungsbudgets.<br> - <strong>Schuldenbremse:</strong> Reform für Investitionen in Infrastruktur." },
    { partei: "CDU-CSU", thema: "Migration und Innere Sicherheitk", position: "-<strong>Videoüberwachung:</strong> Ausbau der Videoüberwachung und Gesichtserkennung im öffentlichen Raum.<br> -<strong>Migration:</strong> Einschränkung der humanitären Aufnahmen und Maßnahmen zur Begrenzung der Migration.<br> -<strong>Cannabislegalisierung:</strong> Abschaffung der aktuellen Regelung der Ampelregierung." },
    { partei: "Bündnis 90/Die Grünen", thema: "Migration und Innere Sicherheitk", position: "- <strong>Integration</strong>: Abbau von Arbeitsverboten für Geflüchtete, Beschleunigung und Digitalisierung von Asylverfahren.<br>- <strong>Binnengrenzkontrollen</strong>: Ablehnung dauerhafter Kontrollen innerhalb der EU; stärkere rechtsstaatliche Außengrenzkontrollen.<br>- <strong>Demokratieförderung</strong>: Gesetz zur Stärkung demokratischer Strukturen und Förderung zivilgesellschaftlichen Engagements.<br>- <strong>Extremismusprävention</strong>: Frühzeitige Maßnahmen gegen Extremismus; Schutz vor digitaler Gewalt und gezielter Desinformation." },
    { partei: "SPD", thema: "Migration und Innere Sicherheitk", position: "- <strong>Einwanderungsland</strong>: Anerkennung Deutschlands als Einwanderungsland mit fairer Integration und klaren Regeln  <br>- <strong>Migration</strong>: Steuerung mit humanitärer Verantwortung und beschleunigten Asylverfahren  <br>- <strong>Asylsystem</strong>: Reform des Gemeinsamen Europäischen Asylsystems (GEAS)  <br>- <strong>Grenzschutz</strong>: Verstärkung der Kontrolle der EU-Außengrenzen  <br>- <strong>Rückführungen</strong>: Menschenrechtlich faire und bevorzugt freiwillige Rückführungen  <br>- <strong>Abschiebungen</strong>: Unterstützung rascher und konsequenter Abschiebungen, besonders bei Straftäter*innen  <br>- <strong>Familiennachzug</strong>: Ablehnung der Aussetzung des Familiennachzugs  <br>- <strong>Arbeitsmarktintegration</strong>: Erleichterung der Arbeitsmarktintegration für Flüchtlinge  " },
    { partei: "AFD", thema: "Migration und Innere Sicherheitk", position: "- <strong>Migrationspolitik:</strong> Einführung von Grenzkontrollen, Zurückweisungen an den Grenzen und Streichung des Bürgergelds für ukrainische Flüchtlinge.<br> - <strong>Kriminalitätsbekämpfung:</strong> Stärkung der Polizei, Bekämpfung von No-Go-Areas und Maßnahmen gegen islamistischen Terrorismus.<br> - <strong>Familienpolitik:</strong> Striktere Regelungen gegen Abtreibungen, Förderung der traditionellen Familie und Betonung der biologischen Geschlechter." },
    { partei: "FDP", thema: "Migration und Innere Sicherheitk", position: "- <strong>Migration:</strong> Sozialleistungen für Flüchtlinge reduzieren, Integration gut integrierter Schutzsuchender erleichtern.<br> - <strong>Innere Sicherheit:</strong> Gegen flächendeckende Überwachung; Modernisierung der Strafjustiz.<br> - <strong>Cannabis:</strong> Legalisierung beibehalten." },
    { partei: "Die Linke", thema: "Migration und Innere Sicherheitk", position: "-<strong> Integration:</strong> Recht auf Arbeit ab dem ersten Tag für Geflüchtete, Schutz des Asylrechts.<br> - <strong>Diskriminierung:</strong> Kampf gegen Rassismus, Antisemitismus und andere Formen von Diskriminierung.<br> - <strong>Demokratie:</strong> Förderung direkter Demokratie und Bürgerrechte, Verbot von Unternehmensspenden an Parteien." },
    { partei: "BSW", thema: "Migration und Innere Sicherheitk", position: "- <strong>Sicherheit:</strong> Ausbau der Polizei und Kontrolle irregulärer Migration.<br>- <strong>Corona-Aufarbeitung:</strong> Entschädigungen für Impffolgen und Rückzahlung von Bußgeldern.<br>- <strong>Bürgerrechte:</strong> Stärkung der direkten Demokratie und Meinungsvielfalt.<br>- <strong>Migration:</strong> Keine Sozialleistungen bei Einreise aus sicheren Drittstaaten, Asylverfahren außerhalb der EU.<br>" },
    { partei: "CDU-CSU", thema: "Bildung", position: "-<strong>Ganztagsangebote:</strong> Förderung von ganztägigen Bildungsangeboten.<br> -<strong>Individuelle Förderung:</strong> Kinder sollen stärker individuell gefördert werden." },
    { partei: "Bündnis 90/Die Grünen", thema: "Bildung", position: "- <strong>Frühkindliche Bildung</strong>: Höhere und verstetigte Investitionen, Ausbau der Kita-Angebote.<br>- <strong>Digitalisierung</strong>: Einführung der „Deutschland-App“ für Verwaltungsprozesse; digitale Bildung in Schulen stärken.<br>- <strong>Hochschulen</strong>: Stärkere Finanzierung der Hochschulen und Förderung von Wissenschaft; bessere Bedingungen für Forschung und Entwicklung.<br>- <strong>Chancengleichheit</strong>: Alle Kinder sollen einen guten Start ins Leben haben, unabhängig von sozialem Hintergrund." },
    { partei: "SPD", thema: "Bildung", position: "- <strong>Bildungssystem</strong>: Anpassung an die Einwanderungsgesellschaft zur Förderung von Integration  <br> - <strong>Chancengleichheit</strong>: Sicherstellung gleicher Bildungschancen für alle  <br> - <strong>Investitionen</strong>: Förderung von Bildung und Forschung als Grundlage für nachhaltiges Wachstum und Wohlstand " },
    { partei: "AFD", thema: "Bildung", position: "- <strong>Schulbildung:</strong> Rückkehr zu einem leistungsorientierten Bildungssystem mit Fokus auf Mathematik und Deutsch. Einführung von Vorschulklassen.<br>- <strong>Förderschulen:</strong> Beibehaltung von Förderschulen als Bildungschance für benachteiligte Kinder.<br>- <strong>Berufliche Bildung:</strong> Stärkere Förderung des dualen Systems, Einführung eines Modells „mehr Meister statt Master“.<br>- <strong>Wissenschaft und Hochschulen:</strong> Autonomie der Hochschulen stärken und Rückkehr zu Abschlüssen wie Diplom und Magister." },
    { partei: "FDP", thema: "Bildung", position: "- <strong>Schulwesen:</strong> Kultusministerkonferenz abschaffen, bundesweite Qualitätsstandards einführen, Fokus auf MINT und Digitalisierung.<br> - <strong>Frühkindliche Bildung:</strong> Verbindliche Sprachtests im Vorschulalter und bessere Bezahlung von Erzieher*innen.<br> - <strong>Lebenslanges Lernen:</strong> Förderung von Weiterbildung durch ein „Lebenschancen-BAföG“." },
    { partei: "Die Linke", thema: "Bildung", position: "- <strong>Gebührenfreiheit:</strong> Bildung von der Kita bis zur Weiterbildung soll gebührenfrei sein.<br> - <strong>Chancengleichheit:</strong> Investitionen in Bildung, um gesellschaftliche Teilhabe und demokratisches Engagement zu ermöglichen." },
    { partei: "BSW", thema: "Bildung", position: "- <strong>Schulsystem:</strong> Vermittlung praxisorientierter Bildung.<br>- <strong>Digitalisierung:</strong> Ausbau digitaler Lehrmittel und Infrastruktur.<br>- <strong>Fachkräftemangel:</strong> Förderung von Ausbildungsprogrammen und Lehrpersonal.<br>- <strong>Einheitliche Prüfungen:</strong> Gleiche Standards in allen Bundesländern.<br>- <strong>Pflicht-Kita:</strong> Bei Sprachdefiziten ab drei Jahren.<br>- <strong>Social-Media-Gesetz:</strong> Altersbeschränkungen nach australischem Vorbild." },
    { partei: "CDU-CSU", thema: "Wirtschaft", position: "-<strong>Arbeitskräfte aus dem Ausland:</strong> Einführung einer digitalen „Work-and-Stay-Agentur“. <br> -<strong>Agrardieselrückvergütung:</strong> Wiedereinführung zur Entlastung der Landwirtschaft.<br> -<strong>Bürokratieabbau:</strong> Maßnahmen zur Vereinfachung von Vorschriften und Abbau von Doppelstrukturen." },
    { partei: "Bündnis 90/Die Grünen", thema: "Wirtschaft", position: "- <strong>Investitionsprämie</strong>: Unternehmen erhalten 10 % Förderung auf Investitionen (außer Gebäude).<br>- <strong>Mittelstand und Handwerk</strong>: Bürokratieabbau, kostenlose Meisterbriefe, bessere Förderung von Ausbildungsplätzen.<br>- <strong>Innovation</strong>: Förderung von Start-ups, Digitalisierung von Geschäftsmodellen, Ausweitung von KI und nachhaltigen Technologien.<br>- <strong>Tariftreuegesetz</strong>: Unterstützung für tarifgebundene Unternehmen; Mindestlohn auf 15 Euro erhöhen.<br>- <strong>Nachhaltige Industrie</strong>: Einführung von „grünen Leitmärkten“ für Stahl, Zement und andere klimaneutrale Produkte." },
    { partei: "SPD", thema: "Wirtschaft", position: "- <strong>Marktwirtschaft</strong>: Stärkung der sozialen Marktwirtschaft mit Fokus auf Innovationen  <br>- <strong>Klimatechnologien</strong>: Förderung klimafreundlicher Technologien und digitaler Infrastrukturen  <br>- <strong>Bürokratieabbau</strong>: Reduzierung von Bürokratie und Einführung von Steueranreizen für Zukunftsinvestitionen  <br>- <strong>Investitionsbonus</strong>: 10 % steuerliche Absetzbarkeit für Investitionen in Deutschland  <br>- <strong>Deutschlandfonds</strong>: Bündelung staatlichen und privaten Kapitals für 100 Mrd. Euro Investitionen  <br>- <strong>Schuldenbremse</strong>: Reform zur Schaffung von mehr finanziellem Spielraum." },
    { partei: "AFD", thema: "Wirtschaft", position: "- <strong>Deregulierung:</strong> Abbau von Bürokratie und Abschaffung von Gesetzen wie dem Lieferkettensorgfaltspflichtengesetz.<br>- <strong>Freies Unternehmertum:</strong> Förderung der Automobilindustrie, insbesondere des Verbrennungsmotors, und Entwicklung synthetischer Kraftstoffe.<br>- <strong>Infrastruktur:</strong> Modernisierung der Straßen, Brücken und Schienen sowie ein schnellerer Ausbau der digitalen Infrastruktur.<br>- <strong>Industriepolitik:</strong> Fokussierung auf traditionelle und innovative Branchen wie Maschinenbau und Chemie." },
    { partei: "FDP", thema: "Wirtschaft", position: "- <strong>Unternehmensentlastung:</strong> Bürokratieabbau durch ein dreijähriges Moratorium und vereinfachte Steuern; Unternehmenssteuerbelastung auf unter 25 % senken.<br> - <strong>Förderung von Innovationen:</strong> Fokus auf Produktivitätssteigerung statt Subventionen in der Landwirtschaft.<br> - <strong>Flexiblere Arbeitsmodelle:</strong> Wöchentliche statt tägliche Höchstarbeitszeit; Modernisierung des Streikrechts." },
    { partei: "Die Linke", thema: "Wirtschaft", position: "- <strong>4-Tage-Woche:</strong> Einführung der 4-Tage-Woche bei vollem Lohnausgleich durch Arbeitszeitverkürzung und Demokratisierung der Arbeitswelt. Arbeitnehmerrechte sollen die Marktsteuerung ersetzen.<br>- <strong>Steuern:</strong> Entlastung niedriger und mittlerer Einkommen, höhere Besteuerung für Reiche und Konzerne. Einführung einer Vermögenssteuer und eines Spitzensteuersatzes von 75 % für Superreiche.<br>- <strong>Industrie: </strong>Investitionsfonds für nachhaltige und soziale Transformation, Förderung genossenschaftlicher Unternehmensmodelle." },
    { partei: "BSW", thema: "Wirtschaft", position: "- <strong>Entlastung:</strong> Bürokratische Hürden für Mittelstand abbauen.<br> - <strong>Förderung:</strong> Regionale Wirtschaftskreisläufe und Schlüsselbranchen.<br> - <strong>Innovationen:</strong> Stärkung durch staatliche Investitionen und steuerliche Anreize.<br> - <strong>Energie:</strong> Billige Energie durch langfristige Importverträge.<br> - <strong>Volksleasing:</strong> Günstige Angebote für E-Autos und sparsame Verbrenner." },
];


function logVisit() {
  fetch('http://localhost:3000/api/log-visit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => {
      if (response.ok) {
          console.log('Besuch erfolgreich geloggt');
      } else {
          console.error('Fehler beim Loggen des Besuchs');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}

function logVisit() {
  fetch('http://localhost:3000/api/log-visit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(response => {
      if (response.ok) {
          console.log('Besuch erfolgreich geloggt');
      } else {
          console.error('Fehler beim Loggen des Besuchs');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}

// Diese Funktion wurde im vorherigen Beispiel verwendet, um Themen zu loggen.
function logThemeView(theme) {
  fetch('http://localhost:3000/api/log-theme', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme: theme })
  })
  .then(response => {
      if (response.ok) {
          console.log('Thema erfolgreich geloggt:', theme);
      } else {
          console.error('Fehler beim Loggen des Themas');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}

// Diese Funktion wurde im vorherigen Beispiel verwendet, um Parteien zu loggen.
function logPartyView(party) {
  fetch('http://localhost:3000/api/log-party', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ party: party })
  })
  .then(response => {
      if (response.ok) {
          console.log('Partei erfolgreich geloggt:', party);
      } else {
          console.error('Fehler beim Loggen der Partei');
      }
  })
  .catch(error => console.error('Fehler bei der Anfrage:', error));
}



// Beispiel für das Loggen von Website-Besuchen:


function loadStats() {
    fetch('http://localhost:3000/api/stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('total-visitors').textContent = data.visits;
            // Hier können Sie auch Diagramme aktualisieren
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}


function logPageVisit() {
  fetch('/api/log-visit', { method: 'POST' });
}


document.addEventListener('DOMContentLoaded', () => {
  logVisit();
  displayThemes();
});


function showPartyInfo(partyName) {
    logPartyView(partyName);
    const modal = document.getElementById('party-modal');
    const modalContent = modal.querySelector('.modal-content');
    const filteredData = data.filter(item => item.partei === partyName);
    
    modalContent.innerHTML = `
      <span class="close" onclick="closeModal()">&times;</span>
      <img src="bilder/${partyName.toLowerCase().replace(/ /g, '')}.png" alt="${partyName} Logo" class="party-logo">
      <h2>${partyName}</h2>
      <div class="party-positions">
        ${filteredData.map(item => `
          <div class="position-card">
            <h3>${item.thema}</h3>
            <p>${item.position}</p>
          </div>
        `).join('')}
      </div>
      <button class="filter-button" onclick="closeModal()">Schließen</button>
    `;
    
    modal.style.display = 'block';
  }



// Funktion zum Anzeigen der Themen
function displayThemes() {
    const themesSection = document.querySelector("#themes");
    const uniqueThemes = [...new Set(data.map(item => item.thema))];

    themesSection.innerHTML = `
        <h2>Themen</h2>
        <div class="card-container">
            ${uniqueThemes.map(theme => `
                <div class="card">
                    <h3>${theme}</h3>
                    <p>Vergleiche die Standpunkte der Parteien zu ${theme}.</p>
                    <button class="filter-button" onclick="showPartiesForTheme('${theme}')">Mehr erfahren</button>
                </div>
            `).join('')}
        </div>
    `;
}

// Funktion zum Anzeigen der Parteien für ein bestimmtes Thema
function showPartiesForTheme(theme) {
    logThemeView(theme);
    const themesSection = document.querySelector("#themes");
    const filteredData = data.filter(item => item.thema === theme);
  
    themesSection.innerHTML = `
      <h2>${theme}</h2>
      <div class="card-container">
          ${filteredData.map(item => `
              <div class="card">
                  <h3>${item.partei}</h3>
                  <p class="position">${item.position}</p> <!-- Hier bleibt es unverändert -->
              </div>
          `).join('')}
      </div>
      <button class="filter-button" onclick="displayThemes()">Zurück zu allen Themen</button>
    `;
  }
  
function closeModal() {
  const modal = document.getElementById('party-modal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('party-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
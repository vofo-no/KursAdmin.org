---
layout: default
title: KursAdmin.org
banner: True
---

<div style="height: 300px;"><div style="background: url('http://38.media.tumblr.com/b69af3ed8a74f7df5e374711d1ed886c/tumblr_n7fgnop0bz1st5lhmo1_1280.jpg') no-repeat 50% 60%;height: 300px;position: absolute;width: 100%;left: 0;background-size: cover;z-index: -1;"></div></div>

<h2 class="feature">Muligheter med KursAdmin</h2>

<p class="lead">KursAdmin skal bidra til enklere administrasjon, bedre kvalitetssikring, mer gjennomsiktighet, mer pålitelighet og bedre dokumentasjon av kursvirksomheten. Verktøyet er tilgjengelig for studieforbundene og deres medlemsorganisasjoner gjennom VOFO.</p>

<div class="row text-center features">
<div class="col-sm-4">
  <h4><span class="glyphicon glyphicon-globe"></span>
    Nettbasert</h4>
  <p>Ingen nedlasting er nødvendig. Har du tilgang til internett er programmet alltid tilgjengelig.</p>
</div>

<div class="col-sm-4">
  <h4><span class="glyphicon glyphicon-book"></span>
    Studieplaner</h4>
  <p>KursAdmin samler alle studieplanene til et studieforbund på et sted, og gir medlemmene mulighet til å låne studieplaner av hverandre.</p>
</div>

<div class="col-sm-4">
  <h4><span class="glyphicon glyphicon-play"></span>
    Veivisere</h4>
  <p>I KursAdmin finner du en veiviser som gjør alle i stand til å lage forslag til studieplan. Likevel kan bare de ansvarlige godkjenne studieplanene. Enkelt og trygt.</p>
</div>
</div>

<div class="row text-center features">
<div class="col-sm-4">
  <h4><span class="glyphicon glyphicon-bullhorn"></span>
    Enkel kommunikasjon</h4>
  <p>KursAdmin gir arrangøren mulighet til å sende informasjon til deltakere via e-post og SMS.</p>
</div>

<div class="col-sm-4">
  <h4><span class="glyphicon glyphicon-send"></span>
    Fakturering</h4>
  <p>Studieforbund som ønsker det, kan fakturere deltakere gjennom KursAdmin.</p>
</div>

<div class="col-sm-4">
  <h4><span class="glyphicon glyphicon-ok"></span>
    Rapportering</h4>
  <p>Når et kurs avsluttes i KursAdmin, er det også automatisk rapportert!</p>
</div>
</div>

<div style="height: 300px; margin-top: 5ex;"><div style="background: url('http://31.media.tumblr.com/f815448aff9bc169f860bc8b63e66cde/tumblr_muhx7hzIIY1sdyj9lo1_1280.jpg') no-repeat 50% 60%;height: 300px;position: absolute;width: 100%;left: 0;background-size: cover;z-index: -1;"></div></div>

<h2 class="feature">Få hjelp med KursAdmin</h2>

<p class="lead">Det er det enkelte studieforbund som tilbyr hjelp og støtte til sine medlemsorganisasjoner og lokallag. Under har vi laget en oversikt som gjør det enkelt å få kontakt med deres studieforbund.</p>

<table class="table"><tbody>
	    	{% for stf in site.data.studieforbund %}
			<tr>
			  <th>{{ stf.navn }}</th>
			  <td>{% if stf.support_mail %}<a href="mailto:{{ stf.support_mail }}">{{ stf.support_mail }}</a>{% endif %}</td>
			  <td>{% if stf.support_tlf %}{{ stf.support_tlf }}{% endif %}</td>
			  <td>{% if stf.support_web %}<a href="{{ stf.support_web }}">Hjelpeside</a>{% endif %}</td>
			</tr>
		{% endfor %}
</tbody></table>

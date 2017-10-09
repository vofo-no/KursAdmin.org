---
layout: default
title: KursAdmin.org
banner: True
---

<div style="height: 300px;"><div style="background: url('{{ site.baseurl }}/images/tumblr_n7fgnop0bz1st5lhmo1_1280.jpg') no-repeat 50% 60%;height: 300px;position: absolute;width: 100%;left: 0;background-size: cover;z-index: -1;"></div></div>

{: .feature }
Muligheter med KursAdmin
------------------------

{: .lead }
KursAdmin skal bidra til enklere administrasjon, bedre kvalitetssikring, mer gjennomsiktighet, mer pålitelighet og bedre dokumentasjon av kursvirksomheten. Verktøyet er tilgjengelig for studieforbundene og deres medlemsorganisasjoner gjennom VOFO.

<div class="row text-center features">
<div class="col-sm-4">
  <h3 class="h4"><span class="glyphicon glyphicon-globe"></span>
    Nettbasert</h3>
  <p>Ingen nedlasting er nødvendig. Har du tilgang til internett er programmet alltid tilgjengelig.</p>
</div>

<div class="col-sm-4">
  <h3 class="h4"><span class="glyphicon glyphicon-book"></span>
    Studieplaner</h3>
  <p>KursAdmin samler alle studieplanene til et studieforbund på et sted, og gir medlemmene mulighet til å låne studieplaner av hverandre.</p>
</div>

<div class="col-sm-4">
  <h3 class="h4"><span class="glyphicon glyphicon-play"></span>
    Veivisere</h3>
  <p>I KursAdmin finner du en veiviser som gjør alle i stand til å lage forslag til studieplan. Likevel kan bare de ansvarlige godkjenne studieplanene. Enkelt og trygt.</p>
</div>
</div>

<div class="row text-center features">
<div class="col-sm-4">
  <h3 class="h4"><span class="glyphicon glyphicon-bullhorn"></span>
    Enkel kommunikasjon</h3>
  <p>KursAdmin gir arrangøren mulighet til å sende informasjon til deltakere via e-post og SMS.</p>
</div>

<div class="col-sm-4">
  <h3 class="h4"><span class="glyphicon glyphicon-send"></span>
    Fakturering</h3>
  <p>Studieforbund som ønsker det, kan fakturere deltakere gjennom KursAdmin.</p>
</div>

<div class="col-sm-4">
  <h3 class="h4"><span class="glyphicon glyphicon-ok"></span>
    Rapportering</h3>
  <p>Når et kurs avsluttes i KursAdmin, er det også automatisk rapportert!</p>
</div>
</div>

<div style="height: 300px; margin-top: 5ex;"><div style="background: url('{{ site.baseurl }}/images/tumblr_mnh0uemhCk1st5lhmo1_1280.jpg') no-repeat 50% 60%;height: 300px;position: absolute;width: 100%;left: 0;background-size: cover;z-index: -1;"></div></div>

{: .feature }
Få hjelp med KursAdmin
----------------------

{: .lead }
Det er det enkelte studieforbund som tilbyr kurs, hjelp og støtte til sine medlemsorganisasjoner og lokallag. Under har vi laget en oversikt som gjør det enkelt å få kontakt med deres studieforbund.

<table class="table table-hover" id="stf-table"><tbody>
		{% for stf in site.data.studieforbund %}
		{% if stf.support_mail or stf.support_tlf or stf.support_web %}
			<tr id="stf-row-{{stf.nr}}" class="row">
			  <td>
				<div class="col-md-4 col-sm-12"><strong>{{ stf.navn }}</strong></div>
				<div class="col-md-4 col-sm-6 col-xs-8">{% if stf.support_mail %}<a href="mailto:{{ stf.support_mail }}?subject=Hjelp%20med%20KursAdmin"><span class="glyphicon glyphicon-envelope"></span> {{ stf.support_mail }}</a>{% endif %}</div>
				<div class="col-md-2 col-sm-3 col-xs-4">{% if stf.support_tlf %}<span class="glyphicon glyphicon-earphone"></span> {{ stf.support_tlf }}{% endif %}</div>
				<div class="col-md-2 col-sm-3 col-xs-12">{% if stf.support_web %}<a href="{{ stf.support_web }}"><span class="glyphicon glyphicon-globe"></span> Hjelpeside</a>{% endif %}</div>
			  </td>
			</tr>
		{% endif %}
		{% endfor %}
</tbody></table>

Dersom du ikke finner ditt studieforbund på lista over, eller opplysningene er feil, vennligst gi beskjed til [kursadmin@vofo.no](mailto:kursadmin@vofo.no?subject=Feil eller mangler i kontaktopplysninger på kursadmin.org).

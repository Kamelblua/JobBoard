<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('sk', array (
  'security' => 
  array (
    'An authentication exception occurred.' => 'Pri overovaní došlo k chybe.',
    'Authentication credentials could not be found.' => 'Overovacie údaje neboli nájdené.',
    'Authentication request could not be processed due to a system problem.' => 'Požiadavok na overenie nemohol byť spracovaný kvôli systémovej chybe.',
    'Invalid credentials.' => 'Neplatné prihlasovacie údaje.',
    'Cookie has already been used by someone else.' => 'Cookie už bolo použité niekým iným.',
    'Not privileged to request the resource.' => 'Nemáte oprávnenie pristupovať k prostriedku.',
    'Invalid CSRF token.' => 'Neplatný CSRF token.',
    'No authentication provider found to support the authentication token.' => 'Poskytovateľ pre overovací token nebol nájdený.',
    'No session available, it either timed out or cookies are not enabled.' => 'Session nie je k dispozíci, vypršala jej platnosť, alebo sú zakázané cookies.',
    'No token could be found.' => 'Token nebol nájdený.',
    'Username could not be found.' => 'Prihlasovacie meno nebolo nájdené.',
    'Account has expired.' => 'Platnosť účtu skončila.',
    'Credentials have expired.' => 'Platnosť prihlasovacích údajov skončila.',
    'Account is disabled.' => 'Účet je zakázaný.',
    'Account is locked.' => 'Účet je zablokovaný.',
    'Too many failed login attempts, please try again later.' => 'Príliš mnoho neúspešných pokusov o prihlásenie. Skúste to prosím znovu neskôr.',
    'Invalid or expired login link.' => 'Neplatný alebo expirovaný odkaz na prihlásenie.',
    'Too many failed login attempts, please try again in %minutes% minute.' => 'Príliš veľa neúspešných pokusov o prihlásenie. Skúste to znova o %minutes% minútu.',
    'Too many failed login attempts, please try again in %minutes% minutes.' => 'Príliš veľa neúspešných pokusov o prihlásenie. Skúste to znova o %minutes% minút.',
  ),
));

$catalogueEn = new MessageCatalogue('en', array (
  'security' => 
  array (
    'An authentication exception occurred.' => 'An authentication exception occurred.',
    'Authentication credentials could not be found.' => 'Authentication credentials could not be found.',
    'Authentication request could not be processed due to a system problem.' => 'Authentication request could not be processed due to a system problem.',
    'Invalid credentials.' => 'Invalid credentials.',
    'Cookie has already been used by someone else.' => 'Cookie has already been used by someone else.',
    'Not privileged to request the resource.' => 'Not privileged to request the resource.',
    'Invalid CSRF token.' => 'Invalid CSRF token.',
    'No authentication provider found to support the authentication token.' => 'No authentication provider found to support the authentication token.',
    'No session available, it either timed out or cookies are not enabled.' => 'No session available, it either timed out or cookies are not enabled.',
    'No token could be found.' => 'No token could be found.',
    'Username could not be found.' => 'Username could not be found.',
    'Account has expired.' => 'Account has expired.',
    'Credentials have expired.' => 'Credentials have expired.',
    'Account is disabled.' => 'Account is disabled.',
    'Account is locked.' => 'Account is locked.',
    'Too many failed login attempts, please try again later.' => 'Too many failed login attempts, please try again later.',
    'Invalid or expired login link.' => 'Invalid or expired login link.',
    'Too many failed login attempts, please try again in %minutes% minute.' => 'Too many failed login attempts, please try again in %minutes% minute.',
    'Too many failed login attempts, please try again in %minutes% minutes.' => 'Too many failed login attempts, please try again in %minutes% minutes.',
  ),
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Previous',
    'label_next' => 'Next',
    'filter_searchword' => 'Searchword...',
  ),
));
$catalogue->addFallbackCatalogue($catalogueEn);

return $catalogue;

<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('tl', array (
  'security' => 
  array (
    'An authentication exception occurred.' => 'Isang pambihirang pagpaptunay ang nangyari.',
    'Authentication credentials could not be found.' => 'Hindi mahanap ang mga kinakailangan na dokumento para sa pagpapatunay.',
    'Authentication request could not be processed due to a system problem.' => 'Hindi maproseso ang iyong hiling dahil may problema sa sistema.',
    'Invalid credentials.' => 'Hindi balidong mga dokumento.',
    'Cookie has already been used by someone else.' => 'Ang Cookie ay ginamit na ng ibang tao.',
    'Not privileged to request the resource.' => 'Walang pribilehiyo upang humingi ng mga bagong mapagkukunan.',
    'Invalid CSRF token.' => 'Hindi balidong mga token ng CSRF.',
    'No authentication provider found to support the authentication token.' => 'Walang nakitang nagbibibagay ng suporta sa token ng pagpapatunay.',
    'No session available, it either timed out or cookies are not enabled.' => 'Walang sesyon ng magagamit, ito ay nawalan ng oras o hindi pinagana.',
    'No token could be found.' => 'Walang token na nahanap.',
    'Username could not be found.' => 'Walang username na makita.',
    'Account has expired.' => 'Ang account ay nag-expire na.',
    'Credentials have expired.' => 'Ang mga kinakailangang dokumento ay nag expire na.',
    'Account is disabled.' => 'Ang account ay hindi pinagana.',
    'Account is locked.' => 'Ang account ay nakasara.',
    'Too many failed login attempts, please try again later.' => 'Madaming bagsak na pagtatangka, pakisubukan ulit mamaya.',
    'Invalid or expired login link.' => 'Inbalido o nagexpire na ang link para makapaglogin.',
    'Too many failed login attempts, please try again in %minutes% minute.' => 'Madaming bagsak na pagtatangka, pakisubukan ulit pagkatapos ng %minutes% minuto.',
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

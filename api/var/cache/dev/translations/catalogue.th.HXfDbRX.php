<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('th', array (
  'security' => 
  array (
    'An authentication exception occurred.' => 'พบความผิดพลาดในการรับรองตัวตน',
    'Authentication credentials could not be found.' => 'ไม่พบข้อมูลในการรับรองตัวตน (credentials) ',
    'Authentication request could not be processed due to a system problem.' => 'คำร้องในการรับรองตัวตนไม่สามารถดำเนินการได้ เนื่องมาจากปัญหาของระบบ',
    'Invalid credentials.' => 'ข้อมูลการรับรองตัวตนไม่ถูกต้อง',
    'Cookie has already been used by someone else.' => 'Cookie ถูกใช้งานไปแล้วด้วยผู้อื่น',
    'Not privileged to request the resource.' => 'ไม่ได้รับสิทธิ์ให้ใช้งานส่วนนี้ได้',
    'Invalid CSRF token.' => 'CSRF token ไม่ถูกต้อง',
    'No authentication provider found to support the authentication token.' => 'ไม่พบ authentication provider ที่รองรับสำหรับ authentication token',
    'No session available, it either timed out or cookies are not enabled.' => 'ไม่มี session ที่พร้อมใช้งาน, Session หมดอายุไปแล้วหรือ cookies ไม่ถูกเปิดใช้งาน',
    'No token could be found.' => 'ไม่พบ token',
    'Username could not be found.' => 'ไม่พบ Username',
    'Account has expired.' => 'บัญชีหมดอายุไปแล้ว',
    'Credentials have expired.' => 'ข้อมูลการระบุตัวตนหมดอายุแล้ว',
    'Account is disabled.' => 'บัญชีถูกระงับแล้ว',
    'Account is locked.' => 'บัญชีถูกล็อกแล้ว',
    'Too many failed login attempts, please try again later.' => 'มีความพยายามเข้าสู่ระบบล้มเหลวมากเกินไป กรุณาลองใหม่ภายหลัง',
    'Invalid or expired login link.' => 'ลิงค์เข้าสู่ระบบไม่ถูกต้องหรือหมดอายุไปแล้ว',
    'Too many failed login attempts, please try again in %minutes% minute.' => 'มีความพยายามเข้าสู่ระบบล้มเหลวมากเกินไป โปรดลองอีกครั้งใน %minutes% นาที',
    'Too many failed login attempts, please try again in %minutes% minutes.' => 'มีความพยายามเข้าสู่ระบบล้มเหลวมากเกินไป โปรดลองอีกครั้งใน %minutes% นาที',
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

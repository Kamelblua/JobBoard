<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Candidate;
use App\Models\Company;
use Illuminate\Http\Request;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\UnencryptedToken;
use Illuminate\Support\Str;

use DateTimeImmutable;
use Exception;
use Illuminate\Support\Facades\Cookie;

class TokenController extends Controller
{
    /**
     * Returns a valid \Lcobucci\JWT\Configuration object
     *
     * @return \Lcobucci\JWT\Configuration
     */
    public static function getConfig()
    {
        $configuration = Configuration::forSymmetricSigner(
            new Sha256(),
            InMemory::base64Encoded(config('auth.tokens.jwt'))
        );

        return $configuration;
    }

    /**
     * Returns a valid JWT
     *
     * @param User $user
     * @return \Lcobucci\JWT\Token\Plain
     */
    public static function generateToken($credentials, $remember_me, $login_as)
    {
        $config = self::getConfig();

        $now = new DateTimeImmutable();
        $token = $config->builder()
            ->issuedBy(config('app.url') . config('app.port'))
            ->permittedFor(config('app.client_url'))
            ->identifiedBy(Str::random(16))
            ->issuedAt($now)
            ->expiresAt($now->modify('+1 hour'))
            ->withClaim('uid', $credentials->id)
            ->withClaim('email', $credentials->email)
            ->withClaim('remember_me', $remember_me ? true : false)
            ->withClaim('logged_in_as', $login_as)
            ->getToken($config->signer(), $config->signingKey());

        return $token;
    }

    public static function generatePasswordResetToken($credentials)
    {
        $config = self::getConfig();

        $now = new DateTimeImmutable();
        $token = $config->builder()
            ->issuedBy(config('app.url'))
            ->permittedFor(config('app.client_url'))
            ->identifiedBy(Str::random(16))
            ->issuedAt($now)
            ->expiresAt($now->modify('+1 hour'))
            ->withClaim('uid', $credentials->id)
            ->withClaim('email', $credentials->email)
            ->withClaim('reason', "password_reset")
            ->getToken($config->signer(), $config->signingKey());

        return $token;
    }

    public static function generateEmailVerifyToken($credentials)
    {
        $config = self::getConfig();

        $now = new DateTimeImmutable();
        $token = $config->builder()
            ->issuedBy(config('app.url') . config('app.port'))
            ->permittedFor(config('app.client_url'))
            ->identifiedBy(Str::random(16))
            ->issuedAt($now)
            ->expiresAt($now->modify('+1 hour'))
            ->withClaim('uid', $credentials->id)
            ->withClaim('email', $credentials->email)
            ->withClaim('reason', "email_verify")
            ->getToken($config->signer(), $config->signingKey());

        return $token;
    }

    /**
     * Verify a token validity
     *
     * @param string $token
     * @return boolean
     */
    public static function verifyToken(string $token)
    {
        try {
            $config = self::getConfig();
            $token = $config->parser()->parse($token);
        } catch (Exception $e) {
            return false;
        }

        return assert($token instanceof UnencryptedToken);
    }

    /**
     * Parse and returns a token content
     *
     * @param string $token
     * @return mixed
     */
    public static function parseToken(string $token)
    {
        $config = self::getConfig();

        $token = $config->parser()->parse($token);

        assert($token instanceof UnencryptedToken);

        return $token->claims()->all();
    }

    /**
     * Get user current
     *
     */
    public static function getCurrentCandidate(Request $request)
    {
        return Candidate::find(self::parseToken($request->cookie('token'))['uid']);
    }

    /**
     * Get user current
     *
     */
    public static function getCurrentCompany(Request $request)
    {
        return Company::where('id', self::parseToken($request->cookie('token'))['uid'])->with(['industry', 'type', 'advertisements.company', 'advertisements.languages', 'advertisements.positions'])->first();
    }

    /**
     * Get user current
     *
     */
    public static function getCurrentAdmin(Request $request)
    {
        return Admin::find(self::parseToken($request->cookie('token'))['uid']);
    }

    public function logout(Request $request)
    {
        Cookie::queue(Cookie::forget('token'));
        $cookie = Cookie::make('token', '');
        return response()->json([
            'message' => "Logged out.",
            'no-cookie' => true,
            'status' => 201
        ], 201)->withCookie($cookie);
    }
}
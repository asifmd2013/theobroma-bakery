# Theobroma Bakery — Vercel migration starter

This repository now contains the initial Next.js/Vercel application shell and a Supabase PostgreSQL schema adapted from the uploaded PHP/MySQL bakery project.

## Important migration status

The uploaded ZIP contains a PHP + MySQL application (storefront, customer pages, admin pages, API endpoints), a MySQL dump and a PHP seed file describing 9 categories and 108 MENU 2026 products. Vercel does not execute this PHP application directly. This starter is the first migration commit, **not yet a complete production e-commerce migration**. Do not accept live orders until catalogue import, authentication, server-side cart/order APIs, Razorpay signature verification and admin authorization are implemented and tested.

## Run locally

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add Supabase project URL and publishable key.
4. Run `npm run dev`.

## Supabase setup

1. Create a Supabase project (Mumbai region is a good choice for India).
2. Open SQL Editor and run `supabase/schema.sql`.
3. Import the exact catalogue from the original `config/seed_menu_2026.php` / MySQL export after conversion to PostgreSQL. Preserve product variants and prices.
4. Configure Google OAuth and phone OTP under Supabase Authentication. SMS provider configuration is required for real OTP delivery.
5. Create the first admin profile manually and verify the role server-side; never allow a public user to self-assign admin.

## Vercel

Import this GitHub repository in Vercel. Framework preset: Next.js. Add environment variables from `.env.example`. Only public Supabase values may use the `NEXT_PUBLIC_` prefix. Keep service-role and Razorpay secret values server-only.

## Payment safety

Razorpay orders must be created server-side using prices read from the database. Verify the Razorpay payment signature server-side before marking an order paid. Never trust a client-submitted total or payment status.

## Original source

The original PHP source ZIP is retained in the conversation upload. Its MySQL schema and PHP seed file are the source of truth for the product menu. This migration starter does not silently substitute guessed catalogue prices.

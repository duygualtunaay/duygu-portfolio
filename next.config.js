const createNextIntlPlugin = require("next-intl/plugin");

// i18n/request.ts yolunu burada veriyoruz:
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);

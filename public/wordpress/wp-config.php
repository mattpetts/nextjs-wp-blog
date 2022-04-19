<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portfolio_wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1:8889' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']cvn&/+q(!1*<A<1_g>v&MatvYH.VO0os3nsG.7Z%?/}<aU[pl[$CRS}3UlmIZ_n' );
define( 'SECURE_AUTH_KEY',  'Xje~J|Ri!N6@UT!pE,{/i:08{4x7IwSR]0k#/j37h78+Ta55{fRB`B~f<O? v&h[' );
define( 'LOGGED_IN_KEY',    'W)%oeNU+f+GF;yw(yFoFV.!Ud|4}Sf)7[,V<SKVbh?{?DcD%6/fcf~6/G-sf1XI_' );
define( 'NONCE_KEY',        '(jFDn82PC&aAoXF dYc,CA}qX@)*{w4p.TQJ|DtETd.Z9|4eKcf%GbWaP+oW_HZ4' );
define( 'AUTH_SALT',        'cm6:0w[4NSE:g/+rN,}]xhzk3z/X{=xt9LqSFWGAa=L_y1U^8Zp.Dyz_4%KSpUC7' );
define( 'SECURE_AUTH_SALT', 'mBKn6DOY], A8`3&J[lM3FW6%X$2gF*LIJ_^bR.BH6wf)]6^AHJ=hS*IN4?ovN/%' );
define( 'LOGGED_IN_SALT',   'O@F mt(1xojW+ly+29`T`^b~T$6q@YWS*>1#Z8Zy[c(66f9]c6!!&o}2 6eUk Q{' );
define( 'NONCE_SALT',       '<vg^!$_+1c4t<E%/O22286arg~_ej,|mk?d(Zd_-}Z;vhi^DK0%8J0?A4*quLd=Q' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

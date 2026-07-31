<!--
==============================================================
   ██████╗  ██████╗  ██████╗ ███╗   ███╗ █████╗
   ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║██╔══██╗
   ██████╔╝██║   ██║██║   ██║██╔████╔██║███████║
   ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║██╔══██║
   ██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║
   ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝
==============================================================
   Developed by Farma
==============================================================
-->

<p align="center">
  <img src="banner.gif" alt="MISA HELPER" width="700">
</p>

<div align="center">

**MISA HELPER** — a modular Discord bot for moderation, verification, security, automod, tickets, levels, voice, and more.

> ⚠️ This repository is a **demo showcase**. The full project is **private**.

</div>

---

## <img src="assets/emoji.png" alt="emoji" width="22" style="vertical-align: middle"> Features

<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Prefix commands with `+` by default.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Slash setup commands for server configuration.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Slash mirrors for prefix commands, using `/command args:` with the same argument order as `+command`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> SQLite persistence for guild config, warnings, jail records, verification stats, security whitelist, and violations.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Daily moderation limits for `warn`, `ban`, `kick`, `timeout`, and `jail`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Warning auto-progression: 2 warnings gives `First Warn`, 4 gives `Second Warn`, 5 auto-jails the user.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Jail system that stores and restores previous roles.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Gender verification stats and leaderboard.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Live voice commands that read current voice channel state.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Anti-bot and audit-log security monitoring.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Automod for spam, mass mentions, invites, links, and blocked words.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Moderation case IDs with reason editing and case lookup.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Temporary ban, jail, and role scheduling.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Reaction roles through reactions, buttons, and select menus.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Ticket panels and ticket channels.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> XP leveling, leaderboards, ignored XP channels, and role rewards.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Welcome/goodbye messages.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Server backup snapshots.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> Customizable help panel with server icon/banner support and custom category emojis.

---

## <img src="assets/emoji.png" alt="emoji" width="22" style="vertical-align: middle"> Demo Pages

<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> [Dashboard demo](dashboard.html)
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> [Warn panel](warn.html)
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> [Ban panel](ban.html)
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> [Jail panel](jail.html)

These are static demo mockups — the real bot logic is not included.

---

## <img src="assets/emoji.png" alt="emoji" width="22" style="vertical-align: middle"> Command Categories

<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Moderation:** `warn`, `unwarn`, `warnings`, `clearwarnings`, `ban`, `unban`, `kick`, `timeout`, `untimeout`, `jail`, `unjail`, `jailinfo`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Verification:** `verifyboy`, `vb`, `verifygirl`, `vg`, `topverif`, `seeverifembed`, `resetveriflb`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Security:** `enable`, `disable`, `antibot`, `setsecuritylogs`, `setlogchannel`, `security`, `rr`, `whitelist`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Automod:** `automod`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Utility:** `config`, `autorole`, `addemojie`, `list`, `show`, `hide`, `boosters`, `add`, `remove`, `clear`, `find`, `setservertag`, `setprefix`, `yt`, `ytmp4`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Voice:** `join`, `vc`, `vclist`, `fmove`, `vmute`, `vunmute`, `vdeafen`, `vundeafen`, `vkick`, `setvoicestate`, `activity`, `cam`, `sb`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Fun:** `8ball`, `coinflip`, `dice`, `choose`, `roast`, `compliment`, `ascii`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **No-prefix:** `avatar`, `a`, `banner`, `b`, `user`, `userinfo`, `u`, `ms77`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Info:** `help`, `ping`, `uptime`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Cases:** `case`, `cases`, `reason`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Temporary punishments:** `tempban`, `tempjail`, `temprole`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Reaction roles:** `rr reaction`, `rr button`, `rr select`, `rr list`, `rr remove`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Tickets:** `ticket setup`, `ticket panel`, `ticket close`, `ticket list`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Leveling:** `rank`, `r`, `level`, `leaderboard`, `lb`, `levelconfig`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Welcome:** `welcome`, `goodbye`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Backups:** `backup create`, `backup list`, `backup show`, `backup load`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Anti-raid:** `antiraid on`, `antiraid off`, `antiraid config`, `antiraid lock`, `antiraid unlock`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Logging:** `logs general|mod|message|member|voice|security`.
<img src="assets/bullet.gif" alt="bullet" width="16" style="vertical-align: middle"> **Permissions:** `cmdperm add`, `cmdperm remove`, `cmdperm clear`.

---

## <img src="assets/emoji.png" alt="emoji" width="22" style="vertical-align: middle"> Get the Full Project

The full source code of **MISA HELPER** is **private**.

Want the full project? Contact me on Discord:

<p align="center">
  <a href="https://discord.com/users/1388316334521319536"><img src="assets/discord.svg" alt="Discord" width="64"></a>
</p>

<p align="center">
  <sub><a href="https://discord.com/users/1388316334521319536">unknown_user54373733</a></sub>
</p>

---

## <img src="assets/emoji.png" alt="emoji" width="22" style="vertical-align: middle"> About

<div align="center">

**MISA HELPER** is developed and maintained by **Farma**.

For more of my work, visit my [GitHub profile](https://github.com/farma3334).

</div>

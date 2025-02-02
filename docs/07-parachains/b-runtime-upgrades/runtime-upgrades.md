---
sidebar_position: 1
keywords: parachains
---

# Preparing for On-Chain Upgrades

_Consider the different approaches to upgrade your chain._

## Goal

Ensure parachains are prepared for an on-chain upgrade.

## Use cases

Launching a parachain.

## Overview

This guide outlines two steps to consider before moving on to implementing
runtime upgrades for a parachain launch.

## Steps

### 1. Inform the relay chain

When launching a parachain, the relay chain needs to be informed about the
runtime upgrade of your chain before it happens. [Cumulus][cumulus-gh] provides
functionality to help you notify the relay chain about the upcoming upgrade by:

1.  **Using
    [`authorize_upgrade`](https://github.com/paritytech/cumulus/blob/d935b81e7010fcf5c5639e238c78d865c1d6ed67/pallets/parachain-system/src/lib.rs#L359)**
    to provide the hash of your upgrade and authorize it.
2.  **Using
    [`enact_authorized_upgrade`](https://github.com/paritytech/cumulus/blob/d935b81e7010fcf5c5639e238c78d865c1d6ed67/pallets/parachain-system/src/lib.rs#L369)**
    to provide the actual code for the upgrade.

With both these functions called, the relay chain will be notified that the new
upgrade has been scheduled.

## 2. Choose your upgrade approach

If your existing Substrate chain has a very large state, which you are migrating
between different storage formats, it might not be possible to run all of the
runtime migrations within one block. **There are a handful of strategies you can
use to remedy this problem:**

1. If the amount of storage items to be migrated can feasibly be processed
   within two or three blocks you can run the migrations using the
   [Scheduler pallet](https://github.com/paritytech/substrate/tree/master/frame/scheduler)
   to ensure they get executed regardless of block producer.

2. Use versioned storage and only execute migrations when storage values that
   haven't yet been upgraded are accessed. This can cause variance in
   transaction fees between users and could potentially result in more complex
   runtime code. However, if properly metered (weights are properly benchmarked)
   this approach will ensure minimal downtime for migration.

3. If you must split your migrations among multiple blocks you can do it either
   on-chain or off-chain:

   - An on-chain multiblock migration will require custom pallet logic to be
     written which can either queue changes over time or use the Scheduler
     pallet to migrate chunks of storage at a time.

   - Instead of adding migration code to your runtime you can generate the
     migration manually off-chain and use multiple system.`setStorage` calls to
     add and remove storage items as necessary via an origin with root
     permission (for example democracy). If you are limited in the number of
     transactions you can make, you can batch multiple transactions to occur
     over time via the scheduler.

## Examples

- [Substrate Migrations](https://github.com/apopiak/substrate-migrations)
- [Staking Pallet Migration Logic](https://github.com/paritytech/substrate/blob/6be513d663836c5c5b8a436f5712402a1c5365a3/frame/staking/src/lib.rs#L757)

## Resources

- [try-runtime Workshop](https://www.crowdcast.io/e/substrate-seminar/41)
- [Substrate Builders Program Storage Migration Discussion](https://drive.google.com/file/d/19HPFUmSQIxVkxaVSg1SWveSdvjHUw1b8/view?usp=sharing)

#### Other

- [Cumulus Overview](https://github.com/paritytech/cumulus/blob/master/docs/overview.md)

- [Substrate Runtime Migration Guide](https://hackmd.io/BQt-gvEdT66Kbw0j5ySlWw?view)

[cumulus-gh]: https://github.com/paritytech/cumulus#cumulus-cloud

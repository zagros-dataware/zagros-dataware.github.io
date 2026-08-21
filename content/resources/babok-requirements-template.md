---
title: "A Practical BABOK-Aligned Business Requirements Template"
date: "2026-05-10"
excerpt: "A working structure for capturing business requirements — elicitation source, rationale, acceptance criteria, and traceability — aligned to BABOK's core competencies."
tags: ["BABOK", "Requirements", "Business Analysis"]
track: "enterprise"
type: "technical-doc"
illustrative: false
---

Most requirements documents fail for the same reason: they record *what* the system should do without recording *why*, which means the first time a requirement is challenged — by a vendor, a budget cut, or a stakeholder who wasn't in the room — nobody can defend it. This template keeps rationale attached to every requirement, not filed away in a workshop's meeting notes.

## Structure

For each requirement, capture:

**1. Requirement ID & Statement**
A short, unambiguous statement of what must be true. Avoid solution language here — "the system must" belongs in the design phase, not the requirement.

**2. Business Need**
One or two sentences tying the requirement back to a business objective. If this can't be filled in, the requirement probably shouldn't exist yet.

**3. Elicitation Source**
Who or what surfaced this — a named stakeholder interview, a workshop, a document review, an observed process. Traceability starts here; a requirement with no source is a requirement nobody can validate later.

**4. Stakeholder(s) Affected**
Everyone whose work changes if this requirement is met, not just whoever requested it. This is where a requirements document usually reveals conflicts that a single-stakeholder interview would have missed.

**5. Acceptance Criteria**
The specific, testable condition that proves the requirement has been satisfied. If acceptance criteria can't be written, the requirement is still too vague to build against.

**6. Priority & Rationale**
Not just "must have / should have / could have," but *why* — cost of not doing it, dependency on another requirement, regulatory necessity.

**7. Solution Mapping**
Once a solution is chosen, record which feature, configuration, or process change actually satisfies this requirement. This is the field that gets skipped most often, and it's the one that makes an audit six months later possible instead of painful.

## Why the source and mapping fields matter more than they look

The two fields teams are most tempted to skip — Elicitation Source and Solution Mapping — are the ones that make the rest of the document defensible. Without a source, a requirement is indistinguishable from an assumption. Without a mapping, there's no way to answer "did we actually build what was asked for" without re-interviewing everyone.

## Using this alongside an Agile-BPM cadence

This template isn't specific to waterfall delivery. In an Agile-BPM iteration, the same fields apply at a smaller grain — a single sprint's worth of process changes still deserves a documented source and acceptance criteria, even if the full requirement set is being built up incrementally rather than signed off all at once upfront.

"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { rooms } from "@/lib/data";
import { Reveal } from "@/components/primitives";
import RoomGallery from "@/components/RoomGallery";
import StickyBooking from "@/components/StickyBooking";
import AmenityIcons from "@/components/AmenityIcons";
import ScrollSequence from "@/components/ScrollSequence";
import FloorPlan from "@/components/FloorPlan";
import Upsells from "@/components/Upsells";
import SimilarSuites from "@/components/SimilarSuites";
import RoomReviews from "@/components/RoomReviews";

export default function RoomPage() {
  const params = useParams<{ slug: string }>();
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  const [upsellTotal, setUpsellTotal] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="section-lg section-ink" style={{ paddingTop: "10rem", paddingBottom: "2rem" }}>
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow mb-5">Suite · {room.view}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-1 max-w-4xl">{room.name}</h1>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-ink" style={{ paddingBottom: "4rem" }}>
        <div className="container-wide">
          <Reveal delay={0.1}>
            <RoomGallery images={room.gallery} roomName={room.name} />
          </Reveal>
        </div>
      </section>

      {/* DESCRIPTION + STICKY BOOKING */}
      <section className="section-ink" style={{ paddingBottom: "6rem" }}>
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 xl:col-span-8">
              <Reveal>
                <p className="eyebrow mb-6">The Suite</p>
              </Reveal>
              <Reveal delay={0.05}>
                <p
                  className="body-lg mb-10"
                  style={{ fontSize: "1.35rem", color: "var(--color-cream)", lineHeight: 1.5 }}
                >
                  {room.longDesc}
                </p>
              </Reveal>

              {/* Amenities */}
              <Reveal delay={0.1}>
                <div
                  className="pt-10"
                  style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
                >
                  <p className="eyebrow mb-8">In the Suite</p>
                  <AmenityIcons amenities={room.amenitiesDetailed} />
                </div>
              </Reveal>
            </div>

            {/* Sticky booking column */}
            <div className="lg:col-span-5 xl:col-span-4">
              <Reveal delay={0.15}>
                <StickyBooking room={room} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL SEQUENCE */}
      <ScrollSequence frames={room.gallery} />

      {/* FLOOR PLAN */}
      <section className="section-lg section-ink">
        <div className="container">
          <Reveal>
            <FloorPlan room={room} />
          </Reveal>
        </div>
      </section>

      {/* UPSELLS */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Enhance your stay</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">Add something to your stay.</h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Upsells onChange={(_ids, total) => setUpsellTotal(total)} />
          </Reveal>

          {upsellTotal > 0 && (
            <Reveal delay={0.15}>
              <div
                className="mt-10 p-6 rounded-2xl flex justify-between items-center flex-wrap gap-4"
                style={{ background: "var(--color-carbon)", border: "1px solid rgba(245,241,232,0.08)" }}
              >
                <span className="body" style={{ color: "var(--color-cream)" }}>
                  Add-ons selected
                </span>
                <span className="heading" style={{ fontSize: "1.25rem", color: "var(--color-gold)" }}>
                  + ${upsellTotal}
                </span>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-lg section-ink">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Guests of this suite</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">What they said.</h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <RoomReviews reviews={room.reviews} />
          </Reveal>
        </div>
      </section>

      {/* SIMILAR SUITES */}
      <section className="section-lg section-cream">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Also consider</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2">Similar suites.</h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <SimilarSuites currentSlug={room.slug} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// YUP VALIDATION SCHEMA
const schema = yup.object({
    name: yup.string().required('Full name is required').max(20, 'Name cannot exceed 20 characters'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    partySize: yup.string().required('Party size is required'),
    date: yup.string().required('Date is required'),
    time: yup.string().required('Time is required'),
    seating: yup.string().required('Seating preference is required'),
    dietaryNotes: yup.string().max(30, 'Dietary notes cannot exceed 30 characters'),
    newsletter: yup.boolean()
})

function ReservationsPage() {

    const [submitted, setSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmit(data) {
        console.log('Reservation submitted:', data)
        setSubmitted(true)
        reset()
        setTimeout(function() {
            setSubmitted(false)
        }, 4000)
    }

    return (
        <>
            <section className="reservation-intro">
                <h1>Reservations</h1>
                <p>Reservations at Steam & Silicon are available on a request-only basis.
                    Our team will confirm your request within 24 hours.</p>
            </section>

            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ maxWidth: '50rem', margin: '3rem auto', padding: '0 2rem 4rem' }}
                noValidate
            >

                {/* SUCCESS MESSAGE */}
                {submitted && (
                    <div className="alert alert-success" role="alert">
                        <strong>Reservation submitted!</strong> We will confirm within 24 hours.
                    </div>
                )}

                {/* NAME */}
                <fieldset>
                    <legend>Your Information</legend>

                    <label htmlFor="name">
                        Full Name <span className="field-hint">Max 20 characters</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. Tairrque Baker"
                        {...register('name')}
                    />
                    {errors.name && (
                        <span className="field-error">{errors.name.message}</span>
                    )}

                    {/* EMAIL */}
                    <label htmlFor="email">
                        Email Address <span className="field-hint">Format: name@example.com</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="e.g. tairrque@email.com"
                        {...register('email')}
                    />
                    {errors.email && (
                        <span className="field-error">{errors.email.message}</span>
                    )}

                    {/* DATE */}
                    <label htmlFor="date">Reservation Date</label>
                    <input
                        type="date"
                        id="date"
                        {...register('date')}
                    />
                    {errors.date && (
                        <span className="field-error">{errors.date.message}</span>
                    )}

                    {/* TIME */}
                    <label htmlFor="time">Reservation Time</label>
                    <input
                        type="time"
                        id="time"
                        {...register('time')}
                    />
                    {errors.time && (
                        <span className="field-error">{errors.time.message}</span>
                    )}
                </fieldset>

                {/* PARTY SIZE */}
                <fieldset>
                    <legend>Dining Details</legend>

                    <label htmlFor="partySize">Party Size</label>
                    <select id="partySize" {...register('partySize')}>
                        <option value="">Select number of guests (1-8)</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                        <option value="6">6 guests</option>
                        <option value="7">7 guests</option>
                        <option value="8">8 guests</option>
                    </select>
                    {errors.partySize && (
                        <span className="field-error">{errors.partySize.message}</span>
                    )}

                    {/* SEATING PREFERENCE */}
                    <label>Seating Preference</label>
                    <div>
                        <label style={{ textTransform: 'none', fontSize: '0.85rem', display: 'inline-flex', marginRight: '1rem' }}>
                            <input
                                type="radio"
                                value="Indoor"
                                {...register('seating')}
                                style={{ marginRight: '0.4rem' }}
                            />
                            Indoor
                        </label>
                        <label style={{ textTransform: 'none', fontSize: '0.85rem', display: 'inline-flex', marginRight: '1rem' }}>
                            <input
                                type="radio"
                                value="Outdoor"
                                {...register('seating')}
                                style={{ marginRight: '0.4rem' }}
                            />
                            Outdoor
                        </label>
                        <label style={{ textTransform: 'none', fontSize: '0.85rem', display: 'inline-flex' }}>
                            <input
                                type="radio"
                                value="SkyPad Lounge"
                                {...register('seating')}
                                style={{ marginRight: '0.4rem' }}
                            />
                            SkyPad Lounge
                        </label>
                    </div>
                    {errors.seating && (
                        <span className="field-error">{errors.seating.message}</span>
                    )}
                </fieldset>

                {/* DIETARY NOTES + NEWSLETTER */}
                <fieldset>
                    <legend>Additional Info</legend>

                    <label htmlFor="dietaryNotes">
                        Dietary Notes <span className="field-hint">Optional — max 30 characters</span>
                    </label>
                    <textarea
                        id="dietaryNotes"
                        placeholder="e.g. Nut allergy, vegan, gluten-free"
                        {...register('dietaryNotes')}
                    />
                    {errors.dietaryNotes && (
                        <span className="field-error">{errors.dietaryNotes.message}</span>
                    )}

                    <label style={{ display: 'inline-flex', alignItems: 'center', textTransform: 'none', fontSize: '0.85rem', marginTop: '1rem' }}>
                        <input
                            type="checkbox"
                            {...register('newsletter')}
                            style={{ marginRight: '0.4rem', width: 'auto' }}
                        />
                        Stay up to date with Steam & Silicon news and exclusive offers
                    </label>
                </fieldset>

                <input type="submit" value="Submit Reservation" />
                <input type="reset" value="Reset" onClick={() => reset()} />

            </form>
        </>
    )
}

export default ReservationsPage
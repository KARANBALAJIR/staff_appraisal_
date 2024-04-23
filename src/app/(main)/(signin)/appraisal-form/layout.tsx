export default function AppraisalFormLayout  ({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div className="h-[calc(100vh-104px)]">
                {children}
        </div>

    )
}